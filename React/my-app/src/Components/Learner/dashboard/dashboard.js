import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import "./LnDashboard.css"
import { Link } from "react-router-dom"
import Calendar             from "../../Calendar/DbCalendar"
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import dashBoard1 from '../img/background/dashBoard1.png';
import CourseForYou from "./courseForYou";

//Start About
function About() {    
    return (
        <div id="bground">
            <p id="titleFun">Learning is Fun!</p>
            <p id="descript">Learn fun awaywhere and anytime without any time limit just through the application.</p>
            <Link to="/search" id="btn">
                <button id="getStarted">Get Started</button> 
            </Link >
        </div>
    )
}
//End About
function LnDashboard({ history }) {
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isLearner) history.push('/login')
    }, [history, userInfo])

    return (
        <div id="lnDashBoardUI">
            <SideBar typeUserTemp={2}/>
            <Header history = {history}/>
            <div id="lnDashboard">
                <div id="about_CFY">
                    <About />
                    <CourseForYou />
                </div>
                <div id="calender-chart">
                    <div id="calendar"><Calendar /></div>
                    <img src={dashBoard1} alt="Img" style={{marginTop: "30px"}} />
                </div>
            </div>
        </div>
    )
}

export default LnDashboard;