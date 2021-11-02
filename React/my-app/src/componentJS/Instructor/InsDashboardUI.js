import React from "react";
import './CSS/InsDashboard.css'
import About from "./About";
import DbCalendar from "./DbCalendar";
import Statistic from "./Statistic";

function InsDashboardUI () {
    return (
        <div id="insdb">
            <About />
            <Statistic learnerCount="500"/>
            {/* <DbCalendar /> */}
        </div>
    )
}

export default InsDashboardUI;