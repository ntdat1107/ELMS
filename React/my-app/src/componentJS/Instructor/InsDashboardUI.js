import React from "react";
import './CSS/InsDashboard.css'
import About from "./About";
import DbCalendar from "./DbCalendar";
import Statistic from "./Statistic";

function InsDashboardUI () {
    return (
        <div id="insdb">
            <About />
            {/* <DbCalendar /> */}
            <Statistic learnerCount="500"/>
        </div>
    )
}

export default InsDashboardUI;