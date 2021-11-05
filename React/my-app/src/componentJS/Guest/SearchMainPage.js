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



function FloatBar() {
    return (
        <div id = "floatBar">
            <div>
                <h1>
                    Learn effectively, learn with us
                </h1>
            </div>
            <button>
                <h2>
                    Join now
                </h2>
            </button>
        </div>
    )
}



export {FloatBar};
export default SearchMainPage;