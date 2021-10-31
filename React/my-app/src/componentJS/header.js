import React from "react";
import SearchBar from "./searchBar";
import Information from "./information";
import '../componentCSS/header.css'
import cheems from "../img/cheems.png"

function div() {
    return (
      <div id="Header">
        <SearchBar id="SearchBar" searchType="Search for ..." />
        <Information srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat2001vn@gmail.com" type="Instructor" idName="informationInstructor" />
      </div>
    )
}

export default div;