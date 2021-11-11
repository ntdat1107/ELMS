import React from "react";
import "./CSS/AdminCourse.css"
import Courseinad from "./Courseinad";
import DropdownBar from "../Guest/DropDownList";
import SideBarAdmin from "../Admin-sideBar";
import cheems from "../../img/cheems.png"
import Header from '../../Header/header'

function AdminCourse () {
    return (
        <div id='admincourse-UI'>
        <div className="AdminUI">
            <SideBarAdmin/>
            <Header linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
            idName="informationInstructor"  typeUserTemp={0}/>
        </div>
        <div id="admincourse">
            <DropdownBar/>
            <Courseinad/>
        </div>
        </div>
    )
}

export default AdminCourse;