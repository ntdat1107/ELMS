import React from 'react'
import {Link} from 'react-router-dom'
import star05 from '../img/rateStar/star0_5.png'
import star15 from '../img/rateStar/star1_5.png'
import star25 from '../img/rateStar/star2_5.png'
import star35 from '../img/rateStar/star3_5.png'
import star45 from '../img/rateStar/star4_5.png'
import star1 from '../img/rateStar/star1.png'
import star2 from '../img/rateStar/star2.png'
import star3 from '../img/rateStar/star3.png'
import star4 from '../img/rateStar/star4.png'
import star5 from '../img/rateStar/star5.png'
import star0 from '../img/rateStar/star0.png'

function OpenRate({rateScore}) {
    let star = star0, arr = (rateScore ? "Your rating" : "Start Course")
    // Choose Star Img
    if (rateScore > 0 && rateScore < 1) star = star05
    else if (rateScore === 1) star = star1
    else if (rateScore > 1 && rateScore < 2) star = star15
    else if (rateScore === 2) star = star2
    else if (rateScore > 2 && rateScore < 3) star = star25
    else if (rateScore === 3) star = star3
    else if (rateScore > 3 && rateScore < 4) star = star35
    else if (rateScore === 4) star = star4
    else if (rateScore > 4 && rateScore < 5) star = star45
    else if (rateScore === 5) star = star5
    return (        
        <div className="rate-btn">            
            <div id="rate">
                <img src={star} alt="Img rating"/>
                <p>{arr}</p>
            </div>            
        </div>
    )
}

const styleBeginner = {
    backgroundColor: "#c0c0c0",
    color: "#4B0C0C",
    marginLeft:"5px",
    borderRadius: "10px",
    width: "60px",
    height: "20px",
    marginTop: "5px"
}
const styleAdvanced = {
    backgroundColor: "#FFD700",
    color: "#4B0C0C",
    marginLeft:"5px",
    borderRadius: "10px",
    width: "60px",
    height: "20px",
    marginTop: "5px"
}
const styleMaster = {
    backgroundColor: "#B9F2FF",
    color: "#4B0C0C",
    marginLeft:"5px",
    borderRadius: "10px",
    width: "60px",
    height: "20px",
    marginTop: "5px"
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
            <p style={{paddingTop: "3px", fontSize: "10px", fontWeight:"bold", width: "60px", textAlign: "center"}}>{type}</p>
        </div>
    )
}


function ItemCourse({
    nameCourse,
    authorCourse,
    imgCourse,
    rateScore,
    fastNameCourse,
    category,
    callback = () => {}
}) {
    return (
        <div className="itemCourse" >
            <div className="imgCourse" style={{overflow: "hidden"}}>
                <img src={imgCourse} alt = "Course Img" style={{borderBottom: "1px solid #000", width: "240px"}}></img>
            </div>
            <div id="nameCourse">
                <Link className="Link-coursename" to={`/course/${fastNameCourse}/1`}>
                    <p>{nameCourse}</p>
                </Link>
                <Category category = {category} />
            </div>
            <div id="authorCourse">
                <p>{authorCourse}</p>
            </div>
            <div className="rateCourseMC">
                <div id = "rateScore">
                    <OpenRate 
                        rateScore = {rateScore}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemCourse;
