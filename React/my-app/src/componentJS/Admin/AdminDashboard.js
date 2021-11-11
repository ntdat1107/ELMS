import React from "react";
import './CSS/AdminDashboard.css'
import Number from "./NumberofUser";
import DashboardCourseAdmin from "./DashboardCourseAdmin";
import SideBarAdmin from "../Admin-sideBar";
import HeaderAdmin from '../header';
import cheems from "../../img/cheems.png"

function AdminDashboard () {
    return (
        <div id='admindashboard-UI'>
        <div className="AdminUI">
            <SideBarAdmin/>
            <HeaderAdmin linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
            idName="informationInstructor"/>
        </div>
        <div id="admindashboard">
            <Number />
            <DashboardCourseAdmin/>
       </div>
       </div>
    )
}

export default AdminDashboard;