import React from 'react'
import python from "./imgSrc/python.png"
import cpp from "./imgSrc/cpp.png"
import html from "./imgSrc/html.png"
import JS from "./imgSrc/JS.png"
import {Link} from "react-router-dom"
import meow from "../img/meow.png"


function CourseCPN({
    imgSrc,
    heightSize,
    widthSize,
    name,
    fastName
}) { 
    return(
        <Link to ={`/ins/managercourse/${fastName}`}>
            <div id="first-c">
                <img src={imgSrc} alt="ImgCourse" height="40px" width="auto"/>
                <p style={{fontSize: "24px", height: "50px", whiteSpace: "nowrap", overflow: "hidden",
                    textOverflow: "ellipsis", width:"245px"
                }}>
                    {name}
                </p>
            </div>
        </Link>
    )
}

function MyCourse({
    titleName,
    widthSize,
    heightSize,
    listCourse
}
) {
    listCourse=listCourse.slice(0, 4)
    if (!listCourse || listCourse.length == 0) return (
        <div id="mycourse">
            <div id="head">
                <div id="my-c-title">{titleName}</div>
            </div>
            <div id="zero-course">
                <p>You do not have courses, click on</p>
                <button>Create</button>
                <p>to create a new Course</p>
                <img src={meow} alt="IMG" height="200px" />
            </div>
        </div>
    )
    else return (
        <div id="mycourse">
            <div id="head">
                <div id="my-c-title">{titleName}</div>
                <Link to="/ins/managecourse">
                    <div id="my-c-viewall">View All</div>
                </Link>
            </div>
            <div id="my-c-list">
                {
                    listCourse.map((data, index) => {
                        return (
                            <CourseCPN key={index} imgSrc = {data.image}
                            heightSize = {heightSize}
                            widthSize = {widthSize}
                            name = {data.name}
                            fastName = {data.fastName} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyCourse
