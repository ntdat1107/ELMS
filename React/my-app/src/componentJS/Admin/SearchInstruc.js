import React from "react";
import searchImg from "../../img/search.png"

function SearchInstruc() {
    return(
            <div id="searchInstruc">
                <input id="searchName" type="text" name="Name:" placeholder="Enter name ..."></input>
                <input id="searchID" type="text" name="ID:" placeholder="Enter ID ..."></input>
                <input id="searchCourse" type="text" name="Course:" placeholder="Enter course ..."></input>            
                <img src={searchImg} alt="SearchIconImage" id="searchInsIcon"/>
            </div>
    )
}

export default SearchInstruc;