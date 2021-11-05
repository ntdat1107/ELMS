import React from "react";
import searchImg from "../img/searchMC.png"

function SearchAnnoun() {
    return(
            <div id="searchAnnoun">
                <input id="inputAnnoun" type="text" name="Name:" placeholder="Search ..."></input>
                <img src={searchImg} alt="SearchIconImage" id="searchAnnounIcon"/>
            </div>
    )
}

export default SearchAnnoun;