import React from "react";
import SearchBar from "./searchBar";
import Information from "./information";
import '../componentCSS/header.css'
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom"


function Header({
  link,
  srcImg,
  name,
  gmail,
  type,
  idName,
}) {
  return (
      <div id="Header">    
        <Link to={link}>
          <img src={Logo} alt="AppLogo" id="Logo"></img>
        </Link>    
        <SearchBar id="SearchBar" searchType="Search for ..." />
        <Information srcImg={srcImg} name={name} gmail={gmail} type={type} idName={idName}/>
      </div>
  )
}

export default Header;