import React from 'react'
import {Link} from "react-router-dom"
import meow from "../img/meow.png"

const styleBeginner = {
    backgroundColor: "#c0c0c0",
    color: "#4B0C0C",
    borderRadius: "10px",
    width: "60px",
    height: "15px",
    marginLeft: "10px",
    marginTop: "5px",
}
const styleAdvanced = {
    backgroundColor: "#FFD700",
    color: "#4B0C0C",
    borderRadius: "10px",
    width: "60px",
    height: "15px",
    marginLeft: "10px",
    marginTop: "5px",
}
const styleMaster = {
    backgroundColor: "#B9F2FF",
    color: "#4B0C0C",
    borderRadius: "10px",
    width: "60px",
    height: "15px",
    marginLeft: "10px",
    marginTop: "5px",
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
            <p style={{paddingTop: "1px", paddingLeft: "0px", fontSize: "10px", fontWeight:"bold", width: "60px", textAlign: "center"}}>{type}</p>
        </div>
    )
}


function CourseCPN({
    imgSrc,
    category,
    name,
    fastName
}) { 
    return(
        <Link to ={`/ins/managecourse/${fastName}`}>
            <div id="first-c">
                <div style={{height: "61px", width: "auto", overflow: "hidden", border: "1px solid black"}}>
                    <img src={imgSrc} alt="ImgCourse" height="60px" width="auto"/>
                </div>
                <div style={{height: '60px', display: "block"}} >
                    <div style={{height: '40px'}} >
                        <p id ="nameCourse">{name}</p>
                    </div>
                    <div style={{height: '15px'}}>
                        <Category category = {category}/>
                    </div>  
                </div>
            </div>
        </Link>
    )
}

function MyCourse({
    titleName,
    listCourse
}
) {
    if (listCourse && listCourse.length > 4) listCourse=listCourse.slice(0, 4)
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
                            category = {data.category}
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
