import React, {useState, useEffect } from "react";
import './header.css'
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom"
import searchIcon from "../img/search.png"
import arrow from "../img/arrow.png"
import SearchBar from './searchBar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, logout, removeProfile } from "../../actions/userActions";


function Arrow() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
    dispatch(removeProfile())
  }
  return (        
      <div className="arrow-btn">            
          <div id="arrow" onClick={handleClick}>
              <img src={arrow} alt="ArrowImage" className="arrowImg" id={click? "arrowClose" : "arrowOpen"}/>
          </div>            
          <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' onClick={logoutHandler} className="nav-link">Logout</Link>
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
          <div id="avatar" style ={{ height: "70px"}}>
              <Link to={linkAvt}>
                  <img src={srcImg} alt="AvatarImage" width="70" height="70"/>
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

function Header({history}) {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const userProfile = useSelector(state => state.userProfile)
  const {userDetail} = userProfile
  useEffect(() => {
    if (!userDetail) {
         dispatch(getUserProfile('profile'))
    }
  }, [dispatch, history, userDetail])
  let typeU, linkProfile, linkLogo
  if (userInfo) {
    if (userInfo.isLearner) {
      linkProfile = '/learner/manageprofile'
      typeU = 'Learner'
      linkLogo = '/learner/dashboard'
    }
    else if (userInfo.isIns) {
      linkProfile = '/ins/manageprofile'
      typeU = 'Instructor'
      linkLogo = '/ins/dashboard'
    }
    else if (userInfo.isAdmin) {
      typeU = 'Admin'
      linkLogo = '/admin/dashboard'
      linkProfile = '/admin/dashboard'
    }
  }
  else {
    typeU = 'Guest'
    linkLogo = '/'
  }
  return (
      <div id="Header">    
        <Link to={linkLogo}>
          <img src={Logo} alt="AppLogo" id="Logo"></img>
        </Link>    
        <SearchBar searchImg = {searchIcon} id="SearchBar" name="Search" searchType="Search for anything" history = {history}/>
        {/* { userInfo && <BellMessage /> } */}
        { userInfo && userDetail && <Information linkAvt={linkProfile} srcImg={userDetail.avatar} name={userDetail.firstName + ' ' + userDetail.lastName} gmail={userDetail.email} type={typeU} idName={userDetail.accountID}/>}
        { !userInfo && <AuthBtn />}
      </div>
  )
}


export default Header;