import React from "react";
import "./CSS/AdminCourse.css"
import Courseinad from "./Courseinad";
import DropdownBar from "../Guest/DropDownList";

function AdminCourse () {
    return (
        <div id="admincourse">
            <DropdownBar/>
            <Courseinad/>
        </div>
    )
}

export default AdminCourse;