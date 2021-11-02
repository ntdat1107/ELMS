import React from "react";
import "../css/LnDashboard.css"
import About from "../js/about";
import CourseForYou from "../js/courseForYou";
function LnDashboard() {
    return (
        <div id="lnDashboard">
            <About />
            <CourseForYou />
        </div>
    )
}

export default LnDashboard;