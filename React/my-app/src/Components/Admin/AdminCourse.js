import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CSS/AdminCourse.css";
import Courseinad from "./Courseinad";
import DropdownBar from "../Guest/DropDownList";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";

function AdminCourse({ history }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || userInfo.isIns) history.push("/login");
    }, [history, userInfo]);

    return (
        <div id="admincourse-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header />
            </div>
            <div id="admincourse">
                <DropdownBar />
                <Courseinad />
            </div>
        </div>
    );
}

export default AdminCourse;
