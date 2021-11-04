import React from "react";
import SearchBar from "../searchBar";
import LogIn from './LogIn';
import Logo from "../../img/Logo.png";
import "./CSS/HomePage.css"
import './CSS/LogIn.css'
import searchIcon from '../../img/search.png'
function HeaderGuest() {
    return (
        <div id="HeaderGuest">
            <img src={Logo} alt="AppLogo" id="Logo"></img>
            <SearchBar id="SearchBar" searchType="Search for ..." searchImg={searchIcon} />
            <LogIn/>
        </div>
    )
  }
export default HeaderGuest;