import React from 'react'
import searchImg from "../../img/search.png"

function SearchHead() {
    return(
        <div id="searchInstruc">
            <label>Name</label>:<input id="searchNIC" type="text" name="Name:" placeholder="Enter name ..."></input>
            <label>ID</label>:<input id="searchNIC" type="text" name="ID:" placeholder="Enter ID ..."></input>       
            <img src={searchImg} alt="SearchIconImage" id="searchInsIcon"/>
        </div>
    )
}

export default SearchHead
