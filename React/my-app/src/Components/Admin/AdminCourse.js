import React from "react";
import "./CSS/AdminCourse.css";
import Courseinad from "./Courseinad";
import DropdownBar from "../Guest/DropDownList";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";

function AdminCourse() {
    return (
        <div id="admincourse-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header/>
            </div>
            <div id="admincourse">
                <DropdownBar />
                <Courseinad />
            </div>
        </div>
    );
}

export default AdminCourse;
