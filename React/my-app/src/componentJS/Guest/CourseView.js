import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import CourseVideoView, { VideoFrame } from "./CourseVideoView";
import CourseMainPage from "./CourseMainPage";
import "./CSS/CourseVideoView.css";
import HeaderGuest from "./HeaderGuest";


function V1() {
    return (
        <VideoFrame url = "https://www.youtube.com/watch?v=WmMCTdbLmnA"/>
    )
}

function V2() {
    return (
        <VideoFrame url = "https://www.youtube.com/watch?v=F5tSoaJ93ac"/>
    )
}


function CourseView() {
    return(
        <div id = "CV">
            <Router>
                
                <Switch>
                    <Route exact path="/course/1234/1_1" component={V1}></Route>
                    <Route exact path = "/course/1234/1_2" component={V2}></Route>
                </Switch>
                <CourseVideoView/>
            </Router>
        </div>
    )
}

export default CourseView;