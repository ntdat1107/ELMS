import React from "react";
import './CSS/InsDashboard.css'
import About from "./About";
import DbCalendar from "../../componentJS/DbCalendar";
import Statistic from "./Statistic";
import TimePerDay from "./TimePerDay";
import MyCourse from "./MyCourse";

function InsDashboardUI () {
    return (
        <div id="insdb">
            <div id="row1">
                <About />
                <Statistic learnerCount="500" videoCount="20" courseCount="6"/>
                <TimePerDay />
            </div>
            <div id="row2">
                <DbCalendar />
                <MyCourse />
            </div>
        </div>
    )
}

export default InsDashboardUI;