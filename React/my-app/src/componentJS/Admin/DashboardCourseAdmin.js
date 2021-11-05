import React from "react";
import '../Guest/CSS/Explorer.css'
import { NavLink } from "react-router-dom";

//course img:
import cPython   from "../Guest/imgs/coursePython.png"
import cUIUX  from "../Guest/imgs/courseUIUX.png"
import cReact  from "../Guest/imgs/courseReactJS.png"
// import cJS  from "./imgs/courseJS.png"
// import cAngular  from "./imgs/Doja.jpg"
import cCpp  from "../Guest/imgs/courseCpp.png"





//instructor img:
import doja from "../Guest/imgs/Doja.jpg"
import hannah from "../Guest/imgs/Hannah.jpg"
import dolores from "../Guest/imgs/Dolores.jpg"
import lupin from "../Guest/imgs/Lupin.jpg"


import {Scrollbars} from 'react-custom-scrollbars'

const courses = {
    "name": "Popular Courses",
    "displayButton": true,
    "list": [
    {
        "id": 1,
        "title": "C++",
        "subtitle": "50+ courses",
        "imgSrc": cCpp,
        "link" : "%Cpp%all%course"
    },
    {    
        "id": 2,
        "title": "Python",
        "subtitle": "20+ courses",
        "imgSrc": cPython,
        "link" : "%Cpp%all%course"
    },
    {
        "id": 3,
        "title": "UI/UX design",
        "subtitle": "10+ courses",
        "imgSrc": cUIUX,
        "link" : "%Cpp%all%course",
    },
    {
        "id": 4,
        "title": "React",
        "subtitle": "10+ courses",
        "imgSrc": cReact,
        "link" : "%Cpp%all%course",
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
    },
    {
        "id": 2,
        "title": "Hannah OwO",
        "subtitle": "5 courses",
        "imgSrc": hannah,
        "link" : "%Cpp%all%course",
    },
    {
        "id": 3,
        "title": "Doja Cat",
        "subtitle": "9 courses",
        "imgSrc": doja,
        "link" : "%Cpp%all%course",
    },
    {
        "id": 4,
        "title": "Remus Lupin",
        "subtitle": "7 courses",
        "imgSrc": lupin,
        "link" : "%Cpp%all%course"
    }
]}

function DashboardCourseAdmin() {
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
                <NavLink activeClassName="ActiveLink" to = "/admin/managecourse" id = "navLink">
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
                <button><p>view all</p></button>
            </div>
            <Scrollbars style={{ width: 410, height: 280 }}>
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


export default DashboardCourseAdmin;


