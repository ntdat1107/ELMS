import React from "react";
import './CSS/Explorer.css'
import dolores from "./imgs/Dolores.jpg"
import Hannah from "./imgs/Hannah.jpg"
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
            <img src = {Hannah}/>
            <h1>LEARN WITH US</h1>
            <button>

            </button>
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
        "imgSrc": "https://newsmd1fr.keeng.net/tiin/archive/images/20210902/144811_184826_streamer_2.jpg"
    },
    {
        "id": 2,
        "title": "React Full Course",
        "subtitle": "Adele",
        "imgSrc": "https://newsmd1fr.keeng.net/tiin/archive/images/20210902/144811_184826_streamer_2.jpg"
    }
]}

const courses2 = {
    "name": "Top Courses",
    "displayButton": "false",
    "list": [
    {
        "id": 1,
        "title": "Django Full Course",
        "subtitle": "Lana del Rey",
        "imgSrc": "https://newsmd1fr.keeng.net/tiin/archive/images/20210902/144811_184826_streamer_2.jpg"
    },
    {
        "id": 2,
        "title": "React Full Course",
        "subtitle": "Adele",
        "imgSrc": "https://newsmd1fr.keeng.net/tiin/archive/images/20210902/144811_184826_streamer_2.jpg"
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

    </li>
)




function CourseBoard({courses}) {
    return (
        <div id = "courseBoard">
            <div id = "boardHeader"> 
                <h1>{courses.name}</h1>
                <button>view all</button>
            </div>

            <ul>
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


export {CourseBoard};

export default MainBody;