import React from 'react'
import {Link} from 'react-router-dom'


function CourseComponentAd({
    imgSrcCourse,
    altCourse,
    Name,
    Desc,
    Author,
    Type,
    rateScore,
    imgStar,
    totalRate,
    tagColor,
    linkToCourse
}) {
    return (
        <div id="courseCFY">
            <Link className="link-to-course" to={linkToCourse}>
                <img id = "imgCourse" src={imgSrcCourse} alt = {altCourse} width = "240px" height = "120px"></img>
            </Link>
            <div id="courseContent">
                <Link className="link-to-course" to={linkToCourse}>
                    <p id = "Name">{Name}</p>
                </Link>
                <p id = "Desc">{Desc}</p>
                <p id = "Author">{Author}</p>
                <div id="rateContent">
                    <div id="p1" style={tagColor}><p>{Type}</p></div>
                    <div id="p2"><p>{rateScore} </p></div>
                    <div id="p3"><img src= {imgStar} alt="star"></img></div>
                    <div id="p4"><p>{totalRate}</p></div>
                </div>
            </div>
          
        </div>
    )
}

export default CourseComponentAd
