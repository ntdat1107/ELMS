import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCourseByFastName } from "../../actions/myCoursesAction.js";
import Scrollbars from "react-custom-scrollbars";
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import Header from "../Header/header";
import SideBar from "../SideBar/SideBar";
import minus from "./image/Iconminus.png";
import instructor from "../img/manageInsHover.png";
import learner from "../img/manageLnHover.png";
import "./CSS/AdminCourse.css";
import { getMyLearner } from "../../actions/myLearnerAction";
import Loading from "../Loading/Loading.js";
import ErrorMsg from "../Error/ErrorMsg.js";

const InforCourse = ({ history, match }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const myOneCourse = useSelector((state) => state.myOneCourse);
    const { loading, error, myOneCourseDetail } = myOneCourse;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) dispatch(getMyCourseByFastName(match.params.fastName));
        else history.push("/login");
    }, [history, dispatch]);

    useEffect(() => {
        if (!myOneCourseDetail) history.push("/login");
    }, [history]);

    const myLearner = useSelector((state) => state.myLearner);
    const { loading: loading1, error: error1, learnerList } = myLearner;

    useEffect(() => {
        dispatch(getMyLearner(match.params.fastName));
    }, [dispatch]);

    if (loading || loading1) {
        return (
            <div className="handleLoading">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <Loading />
            </div>
        );
    } else if (error || error1) {
        return (
            <div id="err">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <ErrorMsg msg={error} />
            </div>
        );
    } else
        return (
            <div id="CourseInformation">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <div id="inner-course">
                    <div id="row-1">
                        {myOneCourseDetail && myOneCourseDetail.name && (
                            <CourseForYouCpn
                                imgSrcCourse={myOneCourseDetail.image}
                                Name={myOneCourseDetail.name}
                                Desc={myOneCourseDetail.description}
                                Author={myOneCourseDetail.authorName}
                                Type={myOneCourseDetail.typeCourse}
                                category={myOneCourseDetail.category}
                                rateScore={myOneCourseDetail.rateScore}
                                totalRate={myOneCourseDetail.rateNum}
                                linkName={`/course/${myOneCourseDetail.fastName}`}
                            />
                        )}
                    </div>
                </div>

                <div id="below">
                    <div className="user-in-course">
                        <div id="green">
                            <img
                                src={instructor}
                                alt="Instructor Icon"
                                width="30px"
                                height="30px"
                            />{" "}
                            <p> Instructor</p>
                        </div>
                        <div id="name">
                            <img
                                id="right-icon"
                                src={minus}
                                alt="Minus Instructor Icon"
                                width="30px"
                                height="30px"
                            />
                            {myOneCourseDetail && myOneCourseDetail.name && (
                                <p id="name-of">{myOneCourseDetail.authorName}</p>
                            )}
                        </div>
                    </div>

                    {/* Danh Sach Hoc Vien */}

                    <div className="user-in-course" id="b">
                        <div id="green">
                            <img src={learner} alt="Learner Icon" width="30px" height="30px" />
                            <span> Learner</span>
                        </div>
                        <Scrollbars style={{ width: 1000, height: "35vh" }}>
                            {learnerList.map((user) => {
                                return (
                                    <div id="name">
                                        <img
                                            id="right-icon"
                                            src={minus}
                                            alt="Minus Instructor Icon"
                                            width="30px"
                                            height="30px"
                                        />
                                        <p id="name-of">{`${user.firstName} ${user.lastName}`}</p>
                                    </div>
                                );
                            })}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        );
};

export default InforCourse;
