import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CSS/AdminDashboard.css";
import Number from "./NumberofUser";
import { LowerBody } from "../Guest/Explorer";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import { getSysIns } from "../../actions/adminActions";
import { listCourses } from "../../actions/courseActions";
import { getSysLearner } from "../../actions/adminActions";
import Loading from "../Loading/Loading";
import ErrorMsg from "../Error/ErrorMsg";

function AdminDashboard({ history }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) history.push("/login");
    }, [history, userInfo]);

    const dispatch = useDispatch();

    const sysIns = useSelector((state) => state.sysIns);
    const { loading, error, sysInsList } = sysIns;

    useEffect(() => {
        dispatch(getSysIns());
    }, [dispatch]);

    const sysLearner = useSelector((state) => state.sysLearner);
    const { loading: loading1, error: error1, sysLearnerList } = sysLearner;

    useEffect(() => {
        dispatch(getSysLearner());
    }, [dispatch]);

    const courseList = useSelector((state) => state.courseList);
    const { loading: loading2, error: error2, courses } = courseList;

    useEffect(() => {
        dispatch(listCourses());
    }, [dispatch]);

    if (loading)
        return (
            <div id="loadingInsTable">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <Loading />
            </div>
        );
    else if (error)
        return (
            <div id="err">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <ErrorMsg msg={error} />
            </div>
        );
    else
        return (
            <div id="admindashboard-UI">
                <div className="AdminUI">
                    <SideBar typeUserTemp={0} />
                    <Header history={history} />
                </div>
                <div id="admindashboard">
                    <Number
                        sysInsList={sysInsList.length}
                        sysLearnerList={sysLearnerList.length}
                        courses={courses.length}
                    />
                    <LowerBody />
                </div>
            </div>
        );
}

export default AdminDashboard;
