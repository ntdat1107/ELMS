import React from "react";
import '../componentCSS/sideBar.css'
import SideBarComponent from "./sideBarComponent";
import Logo from "../img/Logo.png";
import annouce from "../img/annouce.png"
import dashboardImg from "../img/dashboard.png"
import manageCourse from "../img/managerCourse.png"
import manageProfile from "../img/profile.png"
import footer from "../img/footer.png"


function SideBarInstructor() {
    return (
        <div id="SideBar">
            <img src={Logo} alt="AppLogo" id="Logo"></img>
            <ul id="SubSideBar">
                <SideBarComponent idName="dashboard" srcImg={dashboardImg} altName="DashBoard Image" name="DashBoard" h="32" w="40" />
                <SideBarComponent idName="manageCourse" srcImg={manageCourse} altName="Manage Courses Image" name="Manage courses" h="40" w="40" />
                <SideBarComponent idName="annouce" srcImg={annouce} altName="Annoucement Image" name="Announcements" h="40" w="40" />
                <SideBarComponent idName="profile" srcImg={manageProfile} altName="Manage Profile Image" name="Manage profile" h="32" w="36"/>                
            </ul>
            <div id="footer">
                <img src={footer} alt="Footer Image" width="300" height="auto"/>
            </div>
        </div>
    )
}


export default SideBarInstructor;