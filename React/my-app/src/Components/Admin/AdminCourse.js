import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CSS/AdminCourse.css";
import Courseinad from "./Courseinad";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";

function AdminCourse({ history }) {
    return (
        <div id="admincourse-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header />
            </div>
            <div id="admincourse">
                <Courseinad />
            </div>
        </div>
    );
}

export default AdminCourse;
