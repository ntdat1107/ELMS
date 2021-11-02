import React from "react";
import SearchBar from "./searchBar";
import Information from "./information";
import '../css/header.css'
import avatar from "../img/avatar.jpg";
import logo from "../img/logo.png";
import { Link } from "react-router-dom"


function Header() {
  return (
      <div id="Header">    
        <Link to="/ins/dashboard">
          <img src={logo} alt="WebLogo" id="logo"></img>
        </Link>    
        <SearchBar id="SearchBar" searchType="Search for course, quiz, etc..." />
        <Information srcImg={avatar} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner" idName="informationLearner" />
      </div>
  )
}

export default Header;