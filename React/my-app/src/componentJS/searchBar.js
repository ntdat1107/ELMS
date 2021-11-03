import React from "react";


function SearchBar ({
    name,
    searchType,
    searchImg,
    callback = () => {},
}) {
    return (
        <div>
          <input id="Input" type="text" name={name} placeholder={searchType}></input>
          <img src={searchImg} alt="SearchIconImage" id="searchIcon" />
        </div>
    )
}

export default SearchBar;