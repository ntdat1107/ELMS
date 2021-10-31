import React from "react";
import Logo from "../img/Logo.png";


function SideBar() {
    return (
        <div id="SideBar">
            <img src={Logo} alt="AppLogo" id="Logo"></img>
            <ul className="SubSideBar">
                <li><a href>DashBoard</a></li>
                <li><a href></a>Manage course</li>
                <li><a href></a>Announcements</li>
                <li><a href></a>Manage profile</li>
            </ul>
        </div>
    )
}


export default SideBar;