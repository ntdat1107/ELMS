import React from 'react'
import { Link } from 'react-router-dom';
import './courseForYou.css';
import RateContent from './RateContent';

const styleBeginner = {
    backgroundColor: "#c0c0c0",
    color: "#4B0C0C",
    marginLeft:"10px",
    borderRadius: "10px",
}
const styleAdvanced = {
    backgroundColor: "#FFD700",
    color: "#4B0C0C",
    marginLeft:"10px",
    borderRadius: "10px",
}
const styleMaster = {
    backgroundColor: "#B9F2FF",
    color: "#4B0C0C",
    marginLeft:"10px",
    borderRadius: "10px",
}

function Category({
    category
}) {
    let styleType = styleBeginner
    let type = ""
    // Choose Style
    if ( category.toUpperCase() === "BEGINNER") {styleType = styleBeginner; type = "Beginner"}
    else if (category.toUpperCase() === "ADVANCED") {styleType = styleAdvanced; type = "Advanced"}
    else {styleType = styleMaster; type = "Master"}
    return (
        <div id="Category" style={styleType}>
            <p style={{paddingTop: "1px", fontSize: "12px", fontWeight:"bold", width: "80px", textAlign: "center"}}>{type}</p>
        </div>
    )
}

function CourseForYouCpn({
    imgSrcCourse,
    Name,
    Desc,
    Author,
    Type,
    rateScore,
    totalRate,
    tagColor,
    category,
    linkName
}) {
    return (
        <div id="courseCFY">
            <Link to={linkName}>
                <img id = "imgCourse" src={imgSrcCourse} alt = "courseImg" width = "240px" height = "120px"></img>
            </Link>
            <div id="courseContent">
                <div style={{display: "flex"}}>
                <Link className="Link-coursename" to={linkName}>
                    <p id = "Name">{Name}</p>
                </Link>
                <Category category = {category} />
                </div>
                <p id = "Desc">{Desc}</p>
                <p id = "Author">{Author}</p>
                <RateContent TypeCpn={Type} rateScoreCpn={rateScore} totalRateCpn={totalRate} tagColorCpn={tagColor} />
            </div>
        </div>
    )
}

export default CourseForYouCpn;
