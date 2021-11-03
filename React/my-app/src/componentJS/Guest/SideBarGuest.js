import React from "react";
import "./CSS/SideBar.css"
import cReact  from "./imgs/courseReactJS.png"
import cJS  from "./imgs/courseJS.png"
import cPython   from "./imgs/coursePython.png"

const CourseItem = course => (
    <li id = "courseItemSB" >
        <img src = {course.imgSrc} alt ={course.title}/>
        <div id = "informationSB" >
            <h3 >{course.title}</h3>
            <h3 >{course.subtitle}</h3>
        </div>

    </li>
)




function CourseBoard({courses}) {
    return (
        <div id = "courseBoardSB" >
            <div id = "boardHeaderSB" > 
                <h1>{courses.name}</h1>
            </div>

            <ul id = "">
                {courses.list.map((course) => (
                    <CourseItem 
                        key = {course.id}
                        title = {course.title}
                        imgSrc = {course.imgSrc}   
                        subtitle = {course.subtitle}
                    />
                ))}
            </ul>
        </div>
    )
}


const courses = {
    "name": "Popular Courses",
    "list": [
    {
        "id": 1,
        "title": "Django Full Course",
        "subtitle": "Lana del Rey",
        "imgSrc": cPython
    },
    {
        "id": 2,
        "title": "React Full Course",
        "subtitle": "Adele",
        "imgSrc": cReact
    }
]}

function SideBarGuest() {

    return (
        <div id = "sideBarGuest">
            <CourseBoard courses = {courses}/>
            <CourseBoard courses = {courses}/>
        </div>
    )
}

export default SideBarGuest;