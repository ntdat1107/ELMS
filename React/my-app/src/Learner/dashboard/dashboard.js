import React from "react";
import "./LnDashboard.css"
import About from "./about";
import CourseForYou from "./courseForYou";
import Calendar             from "../../Calendar/DbCalendar"
import Chart from "./chart"
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatatLn from '../../img/avtLn.png'
function LnDashboard() {
    return (
        <div id="lnDashBoardUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatatLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
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