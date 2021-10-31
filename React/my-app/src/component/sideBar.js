import React from "react";
import Logo from "../img/Logo.png";
import annouce from "../img/annouce.png"
import dashboard from "../img/dashboard.png"
import manageCourse from "../img/managerCourse.png"
import manageProfile from "../img/profile.png"
import footer from "../img/footer.png"

function SideBarInstructor() {
    return (
        <div id="SideBar">
            <img src={Logo} alt="AppLogo" id="Logo"></img>
            <ul id="SubSideBar">
                <li><a href="">
                    <img id="dashboard" src={dashboard} alt="DashBoard Image"/>
                    DashBoard
                    </a>
                </li>
                <li>
                    <a href="">
                        <img id="manageCourse" src={manageCourse}/>
                        Manage course
                    </a>
                </li>
                <li>
                    <a href="">
                        <img id="annouce" src={annouce} alt="Annoucement Image"/>
                        Announcements
                    </a>
                </li>
                <li>
                    <a href="">
                        <img id="profile" src={manageProfile} alt="Manage Profile Image"/>
                        Manage profiles
                    </a>
                </li>
            </ul>
            <div id="footer">
                <img src={footer} alt="Footer Image" />
            </div>
        </div>
    )
}


export default SideBarInstructor;