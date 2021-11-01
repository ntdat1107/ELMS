import React from "react";
import SearchBar from "./searchBar";
import InformationAdmin from "./Admin-information";
import '../componentCSS/Admin-header.css'
import cheems from "../img/cheems.png"
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom"


function HeaderAdmin() {
  return (
      <div id="Header">    
        <Link to="/ins/dashboard">
          <img src={Logo} alt="AppLogo" id="Logo"></img>
        </Link>    
        <SearchBar id="SearchBar" searchType="Search for ..." />
        <InformationAdmin srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin" idName="informationAdmin" />
      </div>
  )
}

export default HeaderAdmin;