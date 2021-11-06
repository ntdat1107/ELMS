import React from "react";
import Header from './HeaderGuest'
import SideBarGuest from "./SideBarGuest";
import MainBody from "./Explorer"

import CourseMainPage from "./CourseMainPage";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import SearchGuestUI from "./SearchGuest";


import './CSS/HomePage.css'
import Login from "../Login/Login";
import Signup from "../Login/SignUp";
import LoginController from "../Login/LoginController";
import InsDashboardUI from "../Instructor/InsDashboardUI";

function HomePageUI() {
    return (
        <div>
            <Header/>
            <SideBarGuest/>
            <MainBody/>
        </div>
    )
}


export default HomePageUI;