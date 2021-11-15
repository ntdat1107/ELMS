import React from 'react'
import searchImg from "../img/search.png";


function SearchInTable({
    typeUserTemp,
}) {
    return (
        <div id="searchTable">
            <label>Name</label>:<input id="searchNIC" type="text" name="Name:" placeholder="Enter name ..."></input>
            <label>ID</label>:<input id="searchNIC" type="text" name="ID:" placeholder="Enter ID ..."></input>
            {   typeUserTemp != 1 &&
                <div> <label>Course</label>:<input id="searchNIC" type="text" name="Course:" 
                placeholder="Enter course ..."></input>
                </div>
            }
            <img src={searchImg} alt="SearchIconImage" id="searchInsIcon" />
        </div>
    );
}

export default SearchInTable
