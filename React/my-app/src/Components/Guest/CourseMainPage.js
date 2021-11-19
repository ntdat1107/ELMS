import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header           from '../Header/header';
import {CourseBoard}      from "./Explorer";
import Scrollbars from "react-custom-scrollbars"
import './CSS/HomePage.css'
import "./CSS/CourseMainPage.css"

import cPython   from "./imgs/coursePython.png"
import cCpp  from "./imgs/courseCpp.png"

import qs from 'query-string'

import { NavLink } from "react-router-dom";

import { detailCourse } from '../../actions/courseActions';


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

function UpperBody({course}) { 
    return(
        <div id = "upperBody">
            <div id = "informationBox">
                <h1>{course.name}</h1>
                <p>{course.description}</p>
                <h2>{course.authorName}</h2>
                <div id="rate">
                    <p id="score">{course.rateScore} </p>
                    <div id = "numRate"><p>{course.rateNum}</p></div>
                </div>
                
            </div>
            <div id = "imageBox">
                <img src = {course.image} alt="img" style = {{width: "350px", height: "180px", borderRadius: "5px"}}/>
                <button id = "enrollButton" style={{height: "50px"}}>
                    <h3>
                        Enroll course
                    </h3>

                </button>
            </div>
        </div>  
    )
}

function CourseMainPage({ match, history}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    // useEffect(() => {
    //     if (!userInfo) history.push('/login')
    //     // else if (!userInfo.isIns) push error not type
    // }, [history, userInfo])
    const courseDetail = useSelector(state => state.courseDetail)
    const { loading, error, course } = courseDetail

    useEffect(() => {
        dispatch(detailCourse(match.params.id))
    }, [dispatch])
    console.log(course)
    return (
        <div id="courseMainPage">
            <Header link="/" typeUserTemp={-1} />
            <div id = "bodyPage">
                <BackButton url = "/"/>
                <UpperBody course = {course}/>
                <LowerBody course = {course}/>
            </div>
        </div>
    )
}


function LowerBody({course}) {
    return (
        <div id = "lowerBody1">
            <div id = "infoBox">
                <Scrollbars style={{ width: 940, height: 280 }} id = "contentList">
                    <div id = "contentItem">
                        <h2>
                            Overview
                        </h2>
                        <p>
                            {course.name}
                            {course.authorName}
                            {/* {course.overview} */}
                        </p>
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
                <button className ="button">
                    <h3>
                        Go Back
                    </h3>
                </button>
            </NavLink>
        </div>
    )
}

export {BackButton};
export default CourseMainPage;