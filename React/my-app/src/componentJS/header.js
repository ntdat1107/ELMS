import React from "react";
import SearchBar from "./searchBar";
import Information from "./information";
import '../componentCSS/header.css'
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom"
import searchIcon from "../img/search.png"
import BellMessage from "./bellMessage"
import { typeUser } from "./Login/PreLogin";
function Header({
  link,
  linkAvt,
  srcImg,
  name,
  gmail,
  type,
  idName,
}) {
  console.log(typeUser)
  return (
      <div id="Header">    
        <Link to={link}>
          <img src={Logo} alt="AppLogo" id="Logo"></img>
        </Link>    
        <SearchBar searchImg = {searchIcon} id="SearchBar" name="Search" searchType="Search for anything" />
        <BellMessage />
        <Information linkAvt={linkAvt} srcImg={srcImg} name={name} gmail={gmail} type={type} idName={idName}/>
      </div>
  )
}

export default Header;