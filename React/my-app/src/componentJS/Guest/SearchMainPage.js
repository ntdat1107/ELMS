import React from "react";
import CourseForYou from "../Learner/js/courseForYou";
import "../Learner/css/LnDashboard.css"
import star from "../Learner/img/star.png"
import "./CSS/SearchMainPage.css"
import DropDownBar from "./DropDownList";
import "./CSS/Dropdowns.css"
function SearchMainPage() {
    return(
        <div id = "searchResultWrapper">
            <DropDownBar/>
            <CourseForYou/>
        </div>
    )
}  

function TagBar() {
    return (
        <div>
            <h3>day la tagbar</h3>
        </div>
    )
}

function FloatBar() {
    return (
        <div></div>
    )
}

function SearchResultView() {
    return (
        <div>
            <CourseForYou/>
        </div>
    )
}

let courses = [
    {
        "imgSrcCourse":"",
        "altCourse" : "",
        "Name" : "C++ from Beginners to Object Oriented Data Structure",
        "Desc" : "Jump start your C++ Programming Skills through Practical Projects with Basics to Linked Lists , Trees , Pointers, Header",
        "Author" : "Albus Dumbledore",
        "Type" : "New",
        "rateScore" : "4.5",
        "imgStar" : {star},
        "totalRate" : "(1,035)"
    }
]

function SearchResult(coursesList) {
    return (
        <div>
        </div>
    )
}

export {FloatBar};
export default SearchMainPage;