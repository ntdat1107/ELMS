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

function HP() {
    return (
        <div>
            <Header/>
            <SideBarGuest/>
            <MainBody/>
        </div>
    )
}

function HomePageUI() {
    return (
            <div id="homePageUI">
                <Router>
                    <Switch>
                        <Route exact path='/search' component={SearchGuestUI}></Route>
                        <Route exact path='/course/DADA' component={CourseMainPage}></Route>
                        <Route exact path='/' component={HP}></Route>
                        
                    </Switch>
                </Router>
            </div>

    )
}

export default HomePageUI;