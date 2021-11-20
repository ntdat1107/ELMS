import React from "react";
import './CSS/Explorer.css'
import { NavLink } from "react-router-dom";

//course img:
import cPython   from "./imgs/coursePython.png"
import cUIUX  from "./imgs/courseUIUX.png"
import cReact  from "./imgs/courseReactJS.png"
// import cJS  from "./imgs/courseJS.png"
// import cAngular  from "./imgs/Doja.jpg"
import cCpp  from "./imgs/courseCpp.png"





//instructor img:
import doja from "./imgs/Doja.jpg"
import hannah from "./imgs/Hannah.jpg"
import dolores from "./imgs/Dolores.jpg"
import lupin from "./imgs/Lupin.jpg"



// icon:
import student from "./imgs/icon-1-students.png"
import teacher from "./imgs/icons8_teacher.png"
import bigimg from "./imgs/instructors.png" 

import {Scrollbars} from 'react-custom-scrollbars'

function MainBody() {
    return (
        <div id = "mainBody">
            <UpperBody/>
            <LowerBody/>
        </div>
    )
}

function UpperBody() {
    return (
        <div id = "upperBody">
            <div >
                <div id = "big-titles">
                    <h1>Learn effectively, learn with us</h1>
                    <h2>Join our community now</h2>
                </div>
                <div id = "small-titles">
                    
                    <div id = "small-titles-child">
                        <img src = {student} alt = "student-icon"/>
                        <div>
                            <h2>Students</h2>
                            <h2>20000 +</h2>
                        </div>
                    </div>
                    <div id = "small-titles-child">
                        <img src = {teacher} alt = "student-icon"/>
                        <div>
                            <h2>Courses</h2>
                            <h2>200 +</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id = "big-title-img">
                <img src = {bigimg} alt="img"/>
            </div>
        </div>
    )
}

const courses = {
    "name": "Popular Courses",
    "displayButton": true,
    "list": [
    {
        "id": 1,
        "title": "C++",
        "subtitle": "50+ courses",
        "imgSrc": cCpp,
        "link" : "%Cpp%all%course",
        "courseFastname" : "C++"
    },
    {    
        "id": 2,
        "title": "Python",
        "subtitle": "20+ courses",
        "imgSrc": cPython,
        "link" : "%Cpp%all%course",
        "courseFastname" : "python"
    },
    {
        "id": 3,
        "title": "UI/UX design",
        "subtitle": "10+ courses",
        "imgSrc": cUIUX,
        "link" : "%Cpp%all%course",
        "courseFastname" : "UI"
    },
    {
        "id": 4,
        "title": "React",
        "subtitle": "10+ courses",
        "imgSrc": cReact,
        "link" : "%Cpp%all%course",
        "courseFastname" : "React"
    } 
]}

const courses2 = {
    "name": "Best Instructors",
    "displayButton": true,
    "list": [
    {
        "id": 1,
        "title": "Dolores Umbridge",
        "subtitle": "12 courses",
        "imgSrc": dolores,
        "link" : "%Cpp%all%course",
        "courseFastname" : "Dolores"
    },
    {
        "id": 2,
        "title": "Hannah OwO",
        "subtitle": "5 courses",
        "imgSrc": hannah,
        "link" : "%Cpp%all%course",
        "courseFastname" : "Hannah",
    },
    {
        "id": 3,
        "title": "Dat",
        "subtitle": "9 courses",
        "imgSrc": doja,
        "link" : "%Cpp%all%course",
        "courseFastname" : "Dat"
    },
    {
        "id": 4,
        "title": "Maiduck Long",
        "subtitle": "7 courses",
        "imgSrc": lupin,
        "link" : "%Cpp%all%course",
        "courseFastname" : "Long"
    }
]}

function LowerBody() {
    return (
        <div id = "lowerBody">
            <CourseBoard courses = {courses}/>
            <CourseBoard courses = {courses2}/>

        </div>
    )
}

const CourseItem = course => (
    <li id = "courseItem">
        
        <img src = {course.imgSrc} alt ={course.title}/>
        <div id = "information">
            <h3>{course.title}</h3>
            <h3>{course.subtitle}</h3>
        </div>
        {course.displayButton && <button id = "viewButton">
                <NavLink activeClassName="ActiveLink" to = {`/search/${course.courseFastname}`} id = "navLink">
                    <h3>
                        view
                    </h3>
                </NavLink>
        </button>}

    </li>
)




function CourseBoard({courses}) {
    return (
        <div id = "courseBoard">
            <div id = "boardHeader"> 
                <h1>{courses.name}</h1>
                <NavLink activeClassName="ActiveLink" to = {`/search`} id = "navLink">
                    <button><p>view all</p></button>
                </NavLink>
            </div>
            <Scrollbars style={{ width: 410, height: 300 }}>
            <ul>
                {courses.list.map((course) => (
                    <CourseItem
                        key = {course.id}
                        title = {course.title}
                        imgSrc = {course.imgSrc}   
                        subtitle = {course.subtitle}
                        displayButton = {courses.displayButton}
                        courseFastname = {course.courseFastname}
                    />
                ))}
            </ul>
            </Scrollbars>   
        </div>
    )
}


export {CourseBoard};
export {LowerBody}
export default MainBody;