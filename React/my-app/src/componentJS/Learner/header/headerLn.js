import React from "react";
import SearchBar from "../../searchBar";
import InformationLn from "./informationLn";
import './headerLn.css'
import Logo from "../../../img/Logo.png";
import { Link } from "react-router-dom"
import searchIcon from "../../../img/search.png"
import BellMessage from "../../bellMessage"

function HeaderLn({
  link,
  linkAvt,
  srcImg,
  name,
  gmail,
  type,
  idName,
}) {
  return (
      <div id="HeaderLn">    
        <Link to={link}>
          <img src={Logo} alt="AppLogo" id="Logo"></img>
        </Link>    
        <SearchBar searchImg = {searchIcon} id="SearchBar" name="Search" searchType="Search for anything" />
        <BellMessage />
        <InformationLn linkAvt={linkAvt} srcImg={srcImg} name={name} gmail={gmail} type={type} idName={idName}/>
      </div>
  )
}

export default HeaderLn;