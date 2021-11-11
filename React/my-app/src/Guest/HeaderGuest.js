import React from "react";
import SearchBar from "../searchBar";
import LogIn from './LogIn';
import Logo from "../../img/Logo.png";
import "./CSS/HomePage.css"
import './CSS/LogIn.css'
import searchIcon from '../../img/search.png'
import { Link } from "react-router-dom";
function HeaderGuest() {
    return (
        <div id="HeaderGuest">
            <Link to="/">
                <img src={Logo} alt="AppLogo" id="Logo"></img>
            </Link>
            <SearchBar id="SearchBar" searchType="Search for ..." searchImg={searchIcon} />
            <LogIn/>
        </div>
    )
  }
export default HeaderGuest;