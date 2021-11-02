import React from "react";
import searchImg from "../img/search.png"

function SearchBar ({
    name,
    searchType,
    callback = () => {},
}) {
    return (
        <div id="SearchBar">
          <input id="Input" type="text" name={name} placeholder={searchType}></input>
          <img src={searchImg} alt="SearchIconImage" id="searchIcon" />
        </div>
    )
}

export default SearchBar;