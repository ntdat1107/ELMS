import React from "react";
import { Link } from "react-router-dom";
import DropList from "./dropListCourse"
import "./LnMyCourses.css"
import searchIconMC from "../img/icon/searchMC.png"
import TableCourses from "./tableCourses"

function ListMC() {
    return (
        <div id = "myCourses">
            <div className="titleMC"><p>My Courses</p></div>
            <div id="typeCourse">
                <div id="allCourses"><p>All Courses</p></div>
                <div id="archived"><p>Archived</p></div>
                        <div>
                        <input id="Input" type="text" name="SearchBarMC" placeholder="Search my course"></input>
                        <Link className="Link-coursename" to="/learner/search/">
                            <img src={searchIconMC} alt="SearchIconImage" id="searchIcon" />
                        </Link>
                        </div>
            </div>
            <div id="labelSortFilter">
                <div id="sort"><p>Sort by</p></div>
                <div id="filter"><p>Filter by</p></div>
            </div>
            <div id="filterBar">
                <DropList />
                <div id = "buttonReset">
                <p>Reset</p>
                </div>
            </div>
            <div id="listCourseMC">
                <TableCourses />
            </div>
        </div>
    )
}

export default ListMC
