import React from "react";
import CourseForYou from "../courseForYou/courseForYouCpn";
import "../Learner/dashboard/LnDashboard.css"
import "./CSS/SearchMainPage.css"

import DropDownBar from "./DropDownList";
import "./CSS/Dropdowns.css"
import { Link } from "react-router-dom";

function SearchMainPage() {
    return(
        <div id = "searchResultWrapper" >
            <DropDownBar/>
            <CourseForYou className = "cfySearch"/>
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
            <Link to="/signup">
                <button>
                    <h2>
                        Join now
                    </h2>
                </button>
            </Link>
        </div>
    )
}



export {FloatBar};
export default SearchMainPage;