import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CSS/AdminDashboard.css";
import Number from "./NumberofUser";
import DashboardCourseAdmin from "./DashboardCourseAdmin";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import { getSysIns } from "../../actions/adminActions";
import { listCourses } from "../../actions/courseActions";
import { getSysLearner } from "../../actions/adminActions";

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
                <DashboardCourseAdmin />
            </div>
        </div>
    );
}

export default AdminDashboard;
