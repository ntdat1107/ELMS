import React from "react";
import { Link } from "react-router-dom";
function SearchBar ({
    name,
    searchType,
    searchImg,
    callback = () => {},
}) {
    return (
        <div>
            <input id="Input" type="text" name={name} placeholder={searchType}></input>
            <Link className="Link-coursename" to="/learner/search/">
                <img src={searchImg} alt="SearchIconImage" id="searchIcon" />
            </Link>
        </div>
    )
}

export default SearchBar;