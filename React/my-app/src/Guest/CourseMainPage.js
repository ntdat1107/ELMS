import React            from "react";
import Header           from './HeaderGuest';
import {CourseBoard}      from "./Explorer";
import Scrollbars from "react-custom-scrollbars";
import imgStar          from "../Learner/img/star.png"

import './CSS/HomePage.css'
import "./CSS/CourseMainPage.css"

import cPython   from "./imgs/coursePython.png"
import cCpp  from "./imgs/courseCpp.png"
import DADA from "./imgs/courseDADAimg.png"

import HeaderLearner from "../header";
import avt from "../../img/cheems.png"

import { NavLink } from "react-router-dom";

const courses = {
    "name": "Similar Courses",
    "displayButton": false,
    "list": [
    {
        "id": 1,
        "title": "Transfiguration",
        "subtitle": "Minerva McGonagall",
        "imgSrc": cCpp
    },
    {
        "id": 2,
        "title": "History of Magic",
        "subtitle": "Cuthbert Binns",
        "imgSrc": cPython
    }
]};
const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C"
};
const courseDADA = {
    "name": "Defense against Dark arts",
    "description": "Learn how to defend  against all aspects of the Dark Arts, including dark creatures, curses, hexes, jinxes and duelling",
    "instructor": "Dolores Umbridge",
    "imgSrc" : DADA,
    "tagColor" : styleBC,
    "type" : "Best Course",
    "rateScore" : "4.5",
    "totalRate" : "(1,562)"

};

function UpperBody({course}) { 
    return(
        <div id = "upperBody">
            <div id = "informationBox">
                <h1>{course.name}</h1>
                <p>{course.description}</p>
                <h2>{course.instructor}</h2>
                <div id="rate">
                    <p id="score">{course.rateScore} </p>
                    <img src= {imgStar} alt="star"/>
                    <div id = "numRate"><p>{course.totalRate}</p></div>
                </div>
                
            </div>
            <div id = "imageBox">
                <img src = {course.imgSrc} alt="img"/>
                <button id = "enrollButton">
                    <h3>
                        Enroll course
                    </h3>

                </button>
            </div>
        </div>  
    )
}

function CourseMainPage() {
    return (
        <div id="courseMainPage">
            <Header/>
            <div id = "bodyPage">
                <BackButton url = "/"/>
                <UpperBody course = {courseDADA}/>
                <LowerBody/>
            </div>
        </div>
    )
}

function LearnerCourseMainPage() {
    return (
        <div id="learnerCourseMainPage">
            <HeaderLearner 
                linkAvt="/learner/manageprofile" 
                link="/learner/dashboard" 
                srcImg={avt} 
                name="Lâm Thành Dương" 
                gmail="lamduong11201@gmail.com" 
                type="Learner"
                idName="information"
            />
            <div id = "bodyPage">
                <BackButton url = "/learner/dashboard"/>
                <UpperBody course = {courseDADA}/>
                <LowerBody/>
            </div>
        </div>
    )
}


function LowerBody() {
    return (
        <div id = "lowerBody1">
            <div id = "infoBox">
                <Scrollbars style={{ width: 940, height: 280 }} id = "contentList">
                    <div id = "contentItem">
                        <h2>
                            What we'll learn:
                        </h2>
                        <ul>
                            <li>
                                <h3>Array</h3>
                            </li>
                            <li>
                                <h3>Loop</h3>
                            </li>
                            <li>
                                <h3>String</h3>
                            </li>
                            <li>
                                <h3>Function</h3>
                            </li>
                            <li>
                                <h3>Recursive</h3>
                            </li>
                            <li>
                                <h3>Hexes</h3>
                            </li>
                        </ul>
                    </div>
                    <div id = "contentItem">
                        <h2>
                            What we'll learn:
                        </h2>
                        <ul>
                            <li>
                                <h3>Array</h3>
                            </li>
                            <li>
                                <h3>Loop</h3>
                            </li>
                            <li>
                                <h3>String</h3>
                            </li>
                            <li>
                                <h3>Function</h3>
                            </li>
                            <li>
                                <h3>Recursive</h3>
                            </li>
                            <li>
                                <h3>Hexes</h3>
                            </li>
                        </ul>
                    </div>
                    <div id = "contentItem">
                        <h2>
                            What we'll learn:
                        </h2>
                        <ul>
                            <li>
                                <h3>Array</h3>
                            </li>
                            <li>
                                <h3>Loop</h3>
                            </li>
                            <li>
                                <h3>String</h3>
                            </li>
                            <li>
                                <h3>Function</h3>
                            </li>
                            <li>
                                <h3>Recursive</h3>
                            </li>
                            <li>
                                <h3>Hexes</h3>
                            </li>
                        </ul>
                    </div>
                </Scrollbars>
            </div>
            <div>
                <CourseBoard id = "courseboard" courses = {courses}/>
            </div>
        </div>
    )
}

function BackButton({url}) {
    const handleClick = (props) => {console.log(props)};
    return(
        <div id = "backButton">
            <NavLink to={url} id="nav-link" onClick = {handleClick}>
                <button class ="button">
                    <h3>
                        Go Back
                    </h3>
                </button>
            </NavLink>
        </div>
    )
}

export {BackButton, LearnerCourseMainPage};
export default CourseMainPage;