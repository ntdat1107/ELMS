import React from "react";
import './CSS/InsDashboard.css'
import DbCalendar from "../Calendar/DbCalendar";
import Statistic from "./Statistic";
import MyCourse from "./MyCourse";
import BarChart from "./ChartInstructor";
import SideBarInstructor from '../SideBar/SideBar';
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import {Link} from 'react-router-dom'

function About() {    
    return (
        <div id="bground">
            <p id="titleFun">Learning is Fun!</p>
            <p id="descript">Learn fun awaywhere and anytime without any time limit just through the application.</p>
            <Link to="/ins/managecourse" id="btn">
                <button id="getStarted">Get Started</button> 
            </Link >
        </div>
    )
}

function InsDashboardUI () {
    return (
        <div id="insdb">
            <SideBarInstructor typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" 
            gmail="tiendat_2001vn@gmail.com" type="Instructor"
            idName="information" typeUserTemp={1}/>
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