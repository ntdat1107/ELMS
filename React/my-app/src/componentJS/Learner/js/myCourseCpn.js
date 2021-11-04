import React from "react";
import DropList from "./dropList"
import SearchBar from "../../searchBar"
import "../css/LnMyCourses.css"
import searchIconMC from "../img/searchMC.png"
import TableCourses from "./tableCourses"
function ListMC() {
    return (
        <div id = "myCourses">
            <div className="titleMC"><p>My Courses</p></div>
            <div id="typeCourse">
                <div id="allCourses"><p>All Courses</p></div>
                <div id="archived"><p>Archived</p></div>
                <SearchBar searchImg = {searchIconMC} name="SearchBarMC" searchType = "Search my course"/>
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
