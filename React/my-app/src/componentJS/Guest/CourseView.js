import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import CourseVideoView, { VideoFrame } from "./CourseVideoView";
import CourseMainPage from "./CourseMainPage";
import "./CSS/CourseVideoView.css";

import Header from "../header";
import avt from "../../img/cheems.png"




function CourseView() {
    return(
        <div id = "CV">
            <Router>
                <Header 
                linkAvt="/learner/manageprofile" 
                link="/learner/dashboard" 
                srcImg={avt} 
                name="Lâm Thành Dương" 
                gmail="lamduong11201@gmail.com" 
                type="Learner"
                idName="information"/>
                {/* <Switch>
                    <Route exact path="/course/1234/1_1" component={V1}></Route>
                    <Route exact path = "/course/1234/1_2" component={V2}></Route>
                </Switch>
                <CourseVideoView/> */}
            </Router>
        </div>
    )
}

export default CourseView;