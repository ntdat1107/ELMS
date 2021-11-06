import React from "react";
import "../css/LnDashboard.css"
import About from "../js/about";
import CourseForYou from "../js/courseForYou";
import Calendar             from "../../DbCalendar"
import Chart from "./chart"
import Header from '../../header';
import SideBarLearner       from '../../sideBarLearner';
import avt from "../../../img/cheems.png";
function LnDashboard() {
    return (
        <div id="lnDashBoardUI">
            <SideBarLearner/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information"/>
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
        </div>
    )
}

export default LnDashboard;