import React from "react";
import "./CSS/AdminCourse.css"
import Courseinad from "./Courseinad";
import DropdownBar from "../Guest/DropDownList";
import SideBarAdmin from "../Admin-sideBar";
import HeaderAdmin from '../header';
import cheems from "../../img/cheems.png"

function AdminCourse () {
    return (
        <div id='admincourse-UI'>
        <div className="AdminUI">
            <SideBarAdmin/>
            <HeaderAdmin linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
            idName="informationInstructor"/>
        </div>
        <div id="admincourse">
            <DropdownBar/>
            <Courseinad/>
        </div>
        </div>
    )
}

export default AdminCourse;