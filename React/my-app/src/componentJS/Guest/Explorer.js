import React from "react";
import './CSS/Explorer.css'

import student from "./imgs/icon-1-students.png"
import teacher from "./imgs/icons8_teacher.png"

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
                <img src = "https://newsmd1fr.keeng.net/tiin/archive/images/20210902/144811_184826_streamer_2.jpg"/>
            </div>
        </div>
    )
}

const courses = {
    "name": "Popular Courses",
    "list": [
    {
        "id": 1,
        "title": "C++",
        "subtitle": "50+ courses",
        "imgSrc": "https://khaind.github.io/img/cpp_icon.png"
    },
    {
        "id": 2,
        "title": "Python",
        "subtitle": "20+ courses",
        "imgSrc": "https://cdn.transang.me/2019/01/1200px-Python.svg.png"
    },
    {
        "id": 3,
        "title": "UI/UX design",
        "subtitle": "10+ courses",
        "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDaoVmJ9_4YtpEiMuwjkikX_axFDGpIlf2dlpEbimqOpWe8RZo38eVdsxR2-NxrQjydw&usqp=CAU"
    },
    {
        "id": 4,
        "title": "React",
        "subtitle": "10+ courses",
        "imgSrc": "https://khanh.website/wp-content/uploads/2020/01/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"
    } 
]}

const courses2 = {
    "name": "Best Instructors",
    "displayButton": "false",
    "list": [
    {
        "id": 1,
        "title": "Dolores Umbridge",
        "subtitle": "12 courses",
        "imgSrc": "data:image/jpeg;base64,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"
    },
    {
        "id": 2,
        "title": "Hannah OwO",
        "subtitle": "5 courses",
        "imgSrc": "https://newsmd1fr.keeng.net/tiin/archive/images/20210902/144811_184826_streamer_2.jpg"
    },
    {
        "id": 3,
        "title": "Doja Cat",
        "subtitle": "9 courses",
        "imgSrc": "https://media.gq-magazine.co.uk/photos/5eaab3bfb7ebbc00082c8369/1:1/w_1080,h_1080,c_limit/20200430-Doja-Cat.jpg"
    },
    {
        "id": 4,
        "title": "Remus Lupin",
        "subtitle": "7 courses",
        "imgSrc": "https://media1.popsugar-assets.com/files/thumbor/ILPA8_TcMt1ErD7DFQzlU-IURNs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/05/02/726/n/1922283/8ef8b733_edit_img_image_17053399_1462205116/i/JK-Rowling-Tweets-Apology-Killing-Remus-Lupin.png"
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
        <button id = "viewButton"><h3>view</h3></button>
    </li>
)




function CourseBoard({courses}) {
    return (
        <div id = "courseBoard">
            <div id = "boardHeader"> 
                <h1>{courses.name}</h1>
                <button>view all</button>
            </div>
            <Scrollbars style={{ width: 410, height: 300 }}>
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
            </Scrollbars>   
        </div>
    )
}


export {CourseBoard};

export default MainBody;