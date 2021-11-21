import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CSS/AdminDashboard.css";
import Number from "./NumberofUser";
import DashboardCourseAdmin from "./DashboardCourseAdmin";
import SideBar from "../SideBar/SideBar";
import cheems from "../img/cheems.png";
import Header from "../Header/header";

function AdminDashboard({ history }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) history.push("/login");
    }, [history, userInfo]);

    return (
        <div id="admindashboard-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
            </div>
            <div id="admindashboard">
                <Number />
                <DashboardCourseAdmin />
            </div>
        </div>
    );
}

export default AdminDashboard;
