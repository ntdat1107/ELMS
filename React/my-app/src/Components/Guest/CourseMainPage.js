import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header  from '../Header/header';
import {CourseBoard}      from "./Explorer";
import Scrollbars from "react-custom-scrollbars"
import './CSS/HomePage.css'
import "./CSS/CourseMainPage.css"
import "../courseForYou/courseForYou.css"

import cPython   from "./imgs/coursePython.png"
import cCpp  from "./imgs/courseCpp.png"

import { Link, NavLink } from "react-router-dom";
import { detailCourse } from '../../actions/courseActions';
import { enrollNewCourse } from '../../actions/myCoursesAction';
import RateContent from '../courseForYou/RateContent';
import Loading from '../Loading/Loading';
import { disable } from 'colors';

const styleBeginner = {
    backgroundColor: "#c0c0c0",
    borderRadius: "10px",
    height: "50px",
    marginTop: "10px",
}
const styleAdvanced = {
    backgroundColor: "#FFD700",
    borderRadius: "10px",
    height: "50px",
    marginTop: "10px",
}
const styleMaster = {
    backgroundColor: "#B9F2FF",
    borderRadius: "10px",
    height: "50px",
    marginTop: "10px",
}

function Category({
    temp
}) {
    let styleType = styleBeginner
    let type = ""
    // Choose Style
    if (temp&& temp.toUpperCase() === "BEGINNER") {styleType = styleBeginner; type = "Beginner"}
    else if (temp&&temp.toUpperCase() === "ADVANCED") {styleType = styleAdvanced; type = "Advanced"}
    else {styleType = styleMaster; type = "Master"}
    return (
        <div id="Category" style={styleType}>
            <h1 style={{ textAlign: "center", color: "#4B0C0C",}}>{type}</h1>
        </div>
    )
}

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

function UpperBody({course, isHave, isIns, handleEnroll}) { 
    const [enrolled, setEnrolled] = useState(isHave)
    const handleSet = () => {
        if (!isIns) setEnrolled(true)
    }
    const linkPath = `/course/${course.fastName}/1`
    return(
        <div id = "upperBody">
            <div id = "informationBox">
                <div style={{display: "flex", height:"105px"}}>
                <h1 id="nameCourse">{course.name}</h1>
                <Category temp = {course&&course.category} />
                </div>
                <p id = "desc">{course.description}</p>
                <h2>{course.authorName}</h2>
                <RateContent TypeCpn={course.typeCourse} rateScoreCpn={course.rateScore} totalRateCpn={course.rateNum}/> 
            </div>
            <div id = "imageBox">
                <img src = {course.image} alt="img" style = {{width: "350px", height: "180px", borderRadius: "5px"}}/>
                {   !enrolled ?
                    <button onClick={(e) => {handleEnroll(e); handleSet()}} id = "enrollButton" disabled={isIns}>
                        <h3>
                            Enroll course
                        </h3>
                    </button>
                    :
                    <Link to={linkPath} style = {{textDecoration: "none"}}>
                        <button id = "enrollButton">
                            <h3>
                                Go inside
                            </h3>
                        </button>
                    </Link>
                }
            </div>
        </div>  
    )
}

function CourseMainPage({ match, history}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const enrollCourse = useSelector(state => state.enrollCourse)
    const {success, error:enrollError} = enrollCourse
    const handleEnroll = (e) => {
        if (!userInfo) history.push('/login')
        else dispatch(enrollNewCourse(userInfo._id, match.params.id))
    }
    const courseDetail = useSelector(state => state.courseDetail)
    const { loading, error, course } = courseDetail
    useEffect(() => {
        dispatch(detailCourse(match.params.id))
    }, [dispatch])
    if (loading) return (
    <div id="loadingUI">
        <Header history={history} />
        <Loading/>
    </div>
    )
    else if (error || enrollError) return (<div id="error">ERROR</div>)
    else{
        let isHave = false
        if (course.learnerList && userInfo && course.learnerList.indexOf(userInfo._id) != -1) isHave = true
        if (userInfo.isIns && userInfo.hasCourse.indexOf(course._id) != -1) isHave = true
        return (
            <div id="courseMainPage">
                <Header link="/" typeUserTemp={-1} 
                history = {history}
                />
                <div id = "bodyPage">
                    <BackButton url = {`/`}/>
                    <UpperBody userInfo = {userInfo} course = {course} isHave={isHave} isIns={userInfo? userInfo.isIns: false} handleEnroll={handleEnroll}/>
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
                        </p>
                        <p>  
                            {course.authorName}
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