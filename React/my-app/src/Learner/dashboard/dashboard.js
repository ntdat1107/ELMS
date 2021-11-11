import React from "react";
import "./LnDashboard.css"
import About from "./about";
import CourseForYou from "./courseForYou";
import Calendar             from "../../DbCalendar"
import Chart from "./chart"
import Header from '../../';
import SideBarLearner       from '../sidebar/sideBarLearner';
function LnDashboard() {
    return (
        <div id="lnDashBoardUI">
            <SideBarLearner/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg="http://placehold.jp/450x450.png" name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={1}/>
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