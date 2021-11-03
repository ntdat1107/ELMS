import React from "react";
import './CSS/Explorer.css'
import dolores from "./imgs/Dolores.jpg"
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
        "imgSrc": dolores
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
                    />
                ))}
            </ul>
            </Scrollbars>   
        </div>
    )
}


export {CourseBoard};

export default MainBody;