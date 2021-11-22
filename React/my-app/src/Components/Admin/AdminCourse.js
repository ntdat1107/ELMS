import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector, useDispatch } from "react-redux";
import "./CSS/AdminCourse.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import { listCourses } from "../../actions/courseActions";
import Loading from "../Loading/Loading";
import ErrorMsg from "../Error/ErrorMsg";
import CourseForYouCpn from "../courseForYou/courseForYouCpn";

function AdminCourse({ history }) {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) history.push("/login");
    }, [history, userInfo]);

    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;

    useEffect(() => {
        dispatch(listCourses());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="handleLoading">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <Loading />
            </div>
        );
    } else if (error) {
        return (
            <div id="err">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <ErrorMsg msg={error} />
            </div>
        );
    } else
        return (
            <div id="admincourse-UI">
                <div className="AdminUI">
                    <SideBar typeUserTemp={0} />
                    <Header history={history} />
                </div>
                <div id="admincourse">
                    <Scrollbars style={{ height: "73vh" }}>
                        {courses &&
                            courses.map((data, index) => {
                                return (
                                    <CourseForYouCpn
                                        key={index}
                                        imgSrcCourse={data.image}
                                        Name={data.name}
                                        Desc={data.description}
                                        Author={data.authorName}
                                        Type={data.typeCourse}
                                        category={data.category}
                                        rateScore={data.rateScore}
                                        totalRate={data.rateNum}
                                        linkName={`/admin/managecourse/${data.fastName}`}
                                    />
                                );
                            })}
                    </Scrollbars>
                </div>
            </div>
        );
}

export default AdminCourse;
