import React from "react";
import SearchBar from "../searchBar";
import LogIn from './LogIn';
import Logo from "../../img/Logo.png";
import '../../componentCSS/header.css'
import './CSS/LogIn.css'

function HeaderGuest() {
    return (
        <div id="Header">
            <img src={Logo} alt="AppLogo" id="Logo"></img>

            <SearchBar id="SearchBar" searchType="Search for ..." />
            <LogIn/>
        </div>
    )
  }
export default HeaderGuest;