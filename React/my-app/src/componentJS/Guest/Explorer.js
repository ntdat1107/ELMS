import React from "react";
import './CSS/Explorer.css'

//course img:
import cAngular  from "./imgs/Doja.jpg"
import cPython   from "./imgs/coursePython.png"
import cUIUX  from "./imgs/courseUIUX.png"
import cReact  from "./imgs/courseReactJS.png"
import cJS  from "./imgs/courseJS.png"
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
                <img src = {bigimg}/>
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
        "imgSrc": cCpp
    },
    {
        "id": 2,
        "title": "Python",
        "subtitle": "20+ courses",
        "imgSrc": cPython
    },
    {
        "id": 3,
        "title": "UI/UX design",
        "subtitle": "10+ courses",
        "imgSrc": cUIUX
    },
    {
        "id": 4,
        "title": "React",
        "subtitle": "10+ courses",
        "imgSrc": cReact
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
        "imgSrc": dolores
    },
    {
        "id": 2,
        "title": "Hannah OwO",
        "subtitle": "5 courses",
        "imgSrc": hannah
    },
    {
        "id": 3,
        "title": "Doja Cat",
        "subtitle": "9 courses",
        "imgSrc": doja
    },
    {
        "id": 4,
        "title": "Remus Lupin",
        "subtitle": "7 courses",
        "imgSrc": lupin
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
        {course.displayButton && <button id = "viewButton"><h3>view</h3></button>}
    </li>
)




function CourseBoard({courses}) {
    return (
        <div id = "courseBoard">
            <div id = "boardHeader"> 
                <h1>{courses.name}</h1>
                <button><p>view all</p></button>
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
                    />
                ))}
            </ul>
            </Scrollbars>   
        </div>
    )
}


export {CourseBoard};

export default MainBody;