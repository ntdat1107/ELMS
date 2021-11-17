import React from "react";
import searchImg from "../img/search.png";

function SearchInstruc() {
    return (
        <div id="searchInstruc">
            <label id="searchNIC-label">Name :</label>
            <input id="searchNIC" type="text" name="Name:" placeholder="Enter name ..."></input>
            <label id="searchNIC-label">ID :</label>
            <input id="searchNIC" type="text" name="ID:" placeholder="Enter ID ..."></input>
            <label id="searchNIC-label">Course :</label>
            <input id="searchNIC" type="text" name="Course:" placeholder="Enter course ..."></input>
            <img src={searchImg} alt="SearchIconImage" id="searchInsIcon" />
        </div>
    );
}

export default SearchInstruc;
