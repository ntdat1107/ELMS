import React from "react";
import './CSS/InsDashboard.css'
import About from "./About";
import DbCalendar from "../../componentJS/DbCalendar";
import Statistic from "./Statistic";

function InsDashboardUI () {
    return (
        <div id="insdb">
            <div id="row1">
                <About />
                <Statistic learnerCount="500" videoCount="20" courseCount="6"/>
            </div>
            <div id="row2"><DbCalendar /></div>
        </div>
    )
}

export default InsDashboardUI;