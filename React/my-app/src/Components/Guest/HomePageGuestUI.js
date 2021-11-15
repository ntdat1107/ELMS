import React from "react";
import Header from '../Header/header'
import SideBarGuest from "./SideBarGuest";
import MainBody from "./Explorer"
import './CSS/HomePage.css'

function HomePageUI() {
    return (
        <div>
            <Header link="/" typeUserTemp={-1} />
            <SideBarGuest/>
            <MainBody/>
        </div>
    )
}


export default HomePageUI;