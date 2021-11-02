import React from "react";
import "../css/LnDashboard.css"
import About from "../js/about";
import CourseForYou from "../js/courseForYou";
import Calender             from "../../DbCalendar"
function LnDashboard() {
    return (
        <div id="lnDashboard">
            <div id="about_CFY">
                <About />
                <CourseForYou />
            </div>
            <div id="calender">
                <Calender />
            </div>
        </div>
    )
}

export default LnDashboard;