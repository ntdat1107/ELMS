import React from "react";
import "./CSS/AdminDashboard.css";
import Number from "./NumberofUser";
import DashboardCourseAdmin from "./DashboardCourseAdmin";
import SideBar from "../SideBar/SideBar";
import cheems from "../img/cheems.png";
import Header from "../Header/header";

function AdminDashboard() {
    return (
        <div id="admindashboard-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header
                    linkAvt="/admin/dashboard"
                    link="/admin/dashboard"
                    srcImg={cheems}
                    name="Mai Đức Long"
                    gmail="maiduclong@gmail.com"
                    type="Admin"
                    idName="informationInstructor"
                    typeUserTemp={0}
                />
            </div>
            <div id="admindashboard">
                <Number />
                <DashboardCourseAdmin />
            </div>
        </div>
    );
}

export default AdminDashboard;
