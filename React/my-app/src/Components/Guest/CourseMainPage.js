import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header  from '../Header/header';
import {CourseBoard}      from "./Explorer";
import Scrollbars from "react-custom-scrollbars"
import './CSS/HomePage.css'
import "./CSS/CourseMainPage.css"

import cPython   from "./imgs/coursePython.png"
import cCpp  from "./imgs/courseCpp.png"

import { NavLink } from "react-router-dom";
import { detailCourse } from '../../actions/courseActions';
import { enrollNewCourse } from '../../actions/myCoursesAction';

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

function UpperBody({course, isHave, handleEnroll}) { 
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
                <button onClick={handleEnroll} id = "enrollButton" style={{height: "150px"}}>
                    <h3>
                        Enroll course
                    </h3>
                </button>
            </div>
        </div>  
    )
}

function CourseMainPage({ match, history}) {
    const [isHave, setIsHave] = useState(false)
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const enrollCourse = useSelector(state => state.enrollCourse)
    const {success} = enrollCourse
    const handleEnroll = (e) => {
        // console.log('a')
        // e.preventDefault()
        // console.log(userInfo._id, match.params.id)
        dispatch(enrollNewCourse(match.params.id))
    }
    const courseDetail = useSelector(state => state.courseDetail)
    const { loading, error, course } = courseDetail
    useEffect(() => {
        dispatch(detailCourse(match.params.id))
    }, [dispatch])
    if (loading) return (<div id="loading">Loading</div>)
    else if (error) return (<div id="error">ERROR</div>)
    else{
        // if (course.learnerList && course.learnerList.indexOf(userInfo._id) != -1) setIsHave(true)
        return (
            <div id="courseMainPage">
                <Header link="/" typeUserTemp={-1} />
                <div id = "bodyPage">
                    <BackButton url = "/"/>
                    <UpperBody course = {course} isHave={isHave} handleEnroll={handleEnroll}/>
                    <LowerBody course = {course} />
                </div>
            </div>
        )
    }
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