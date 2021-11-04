import React from "react";
import "../css/LnDashboard.css"
import About from "../js/about";
import CourseForYou from "../js/courseForYou";
import Calendar             from "../../DbCalendar"
import Chart from "./chart"
function LnDashboard() {
    return (
        <div id="lnDashboard">
            <div id="about_CFY">
                <About />
                <CourseForYou />
            </div>
            <div id="calender-chart">
                <div id="calendar"><Calendar /></div>
                <div id="WSH"><Chart /></div>
            </div>
        </div>
    )
}

export default LnDashboard;