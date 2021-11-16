import React, {useState} from "react";
import './header.css'
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom"
import searchIcon from "../img/search.png"
import BellMessage from "./bellMessage"
import arrow from "../img/arrow.png"
import SearchBar from './searchBar'



function Arrow() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  return (        
      <div className="arrow-btn">            
          <div id="arrow" onClick={handleClick}>
              <img src={arrow} alt="ArrowImage" className="arrowImg" id={click? "arrowClose" : "arrowOpen"}/>
          </div>            
          <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li  className="nav-item">
              <Link to='/' className="nav-link">Logout</Link>
            </li>
          </ul>
      </div>
  )
}



function Information({
  srcImg,
  linkAvt,
  name,
  gmail,
  type
}) {
  return (
      <div id="information">            
          <div id="avatar" style ={{ height: "60px"}}>
              <Link to={linkAvt}>
                  <img src={srcImg} alt="AvatarImage" width="60" height="auto"/>
              </Link>
          </div>
          <ul id="inform">
              <Link to={linkAvt} id="linkName">
                  <li id="name"><h3>{name}</h3></li>
              </Link>
              <li id="gmail"><p>{gmail}</p></li>
              <li id="type"><p>{type}</p></li>
          </ul>
          <Arrow/>
      </div>
  )
}

function AuthBtn() {

  return (
      <div id = "auth-btn">
          <Link to="/login">
              <button id = "login-btn">
                  <p>Log In</p>
              </button>
          </Link>
          <Link to="/signup">
              <button id = "signup-btn">
                  <p>Sign Up</p>
              </button>
          </Link>
      </div>
  )
}

function Header({
  link,
  linkAvt,
  srcImg,
  name,
  gmail,
  type,
  idName,
  typeUserTemp
}) {
  return (
      <div id="Header">    
        <Link to={link}>
          <img src={Logo} alt="AppLogo" id="Logo"></img>
        </Link>    
        <SearchBar searchImg = {searchIcon} id="SearchBar" name="Search" searchType="Search for anything" />
        {typeUserTemp !== -1 && <BellMessage />}
        {typeUserTemp !== -1 && <Information linkAvt={linkAvt} srcImg={srcImg} name={name} 
                                          gmail={gmail} type={type} idName={idName} typeUserTemp={typeUserTemp}/>}
        {typeUserTemp === -1 && <AuthBtn />}
      </div>
  )
}


export default Header;