import React from "react";
import '../componentCSS/header.css'

function div() {
    return (
      <div id="Header">
        <div id="SearchBar">
          <input id="Input" type="text" name="Search" placeholder="Search for ..."></input>
        </div>
      </div>
    )
}

export default div;