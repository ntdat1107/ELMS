import React from "react";
import './CSS/InsDashboard.css'
import About from "./About";
import DbCalendar from "../../componentJS/DbCalendar";
import Statistic from "./Statistic";
import MyCourse from "./MyCourse";
import BarChart from "./ChartInstructor";
import SideBarInstructor from '../sideBarInstructor';
import Header from '../header';
import cheems from "../../img/cheems.png"

function InsDashboardUI () {
    return (
        <div id="insdb">
            <SideBarInstructor/>
        <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information"/>
            <div id="col1">
                <About />
                <Statistic learnerCount="500" videoCount="20" courseCount="6"/>
                <div id="WSH">
                    <BarChart />
                </div>
            </div>
            <div id="col2">
                <DbCalendar />
                <MyCourse titleName="My courses" heightSize="60px" widthSize="60px"/>
            </div>
        </div>
    )
}

export default InsDashboardUI;