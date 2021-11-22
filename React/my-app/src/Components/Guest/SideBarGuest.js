import React from "react";
import "./CSS/SideBar.css"
import cReact  from "./imgs/courseReactJS.png"
import cPython   from "./imgs/coursePython.png"
import { NavLink } from "react-router-dom";

const CourseItem = course => (
    <li id = "courseItemSB" >
        
            <img src = {course.imgSrc} alt ={course.title}/>
            <div id = "informationSB" >
                <NavLink to={`/course/${course.courseFastname}`} activeClassName="InactiveLink" id = "navLink">
                    <h3 id = "courseName">{course.title}</h3>
                </NavLink>
                <NavLink to={`/search/${course.subtitle}`} activeClassName="InactiveLink" id = "navLink">
                    <h3 id = "courseIns">{course.subtitle}</h3>
                </NavLink>
            </div>
        

    </li>
)
function CourseBoard({courses}) {
    return (
        <div id = "courseBoardSB" >
            <div id = "boardHeaderSB" > 
                <h2>{courses.name}</h2>
            </div>

            <ul id = "courseListSB">
                {courses.list.map((course) => (
                    <CourseItem 
                        key = {course.id}
                        title = {course.title}
                        imgSrc = {course.imgSrc}   
                        subtitle = {course.subtitle}
                        courseFastname = {course.courseFastname}
                    />
                ))}
            </ul>
        </div>
    )
}

const courses = {
    "name": "Best Courses",
    "list": [
    {
        "id": 1,
        "title": "Complete Python Course",
        "subtitle": "Đạt",
        "imgSrc": cPython,
        "courseFastname": "py"
    },
    {
        "id": 2,
        "title": "Complete Git Course",
        "subtitle": "Đạt",
        "imgSrc": cReact,
        "courseFastname": "git"
    }
]}

const courses2 = {
    "name": "New Courses",
    "list": [
    {
        "id": 1,
        "title": "C++ Course",
        "subtitle": "Long",
        "imgSrc": cPython,
        "courseFastname": "cpp"
    },
    {
        "id": 2,
        "title": "GCC-G++ Course",
        "subtitle": "Long",
            "imgSrc": cReact,
        "courseFastname": "gcc-gpp"
    }
]}

function SideBarGuest() {

    return (
        <div id = "sideBarGuest">
            <CourseBoard courses = {courses}/>
            <CourseBoard courses = {courses2}/>
        </div>
    )
}

export {CourseBoard};
export default SideBarGuest;