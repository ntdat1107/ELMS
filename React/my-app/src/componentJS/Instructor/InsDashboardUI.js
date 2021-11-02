import React from "react";
import './CSS/InsDashboard.css'
import About from "./About";
import DbCalendar from "./DbCalendar";
import Statistic from "./Statistic";

function InsDashboardUI () {
    return (
        <div id="insdb">
            <About />
            <Statistic learnerCount="500" videoCount="20" courseCount="6"/>
            {/* <DbCalendar /> */}
        </div>
    )
}

export default InsDashboardUI;