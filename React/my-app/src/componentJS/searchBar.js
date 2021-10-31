import React from "react";
import searchImg from "../img/search.png"

function SearchBar ({
    searchType,
    callback = () => {},
}) {
    return (
        <div id="SearchBar">
          <input id="Input" type="text" name="Search" placeholder={searchType}></input>
          <img src={searchImg} alt="Search Icon Image" id="searchIcon" />
        </div>
    )
}

export default SearchBar;