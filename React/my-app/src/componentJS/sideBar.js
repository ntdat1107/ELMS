import React, { useState } from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"
import '../componentCSS/sideBar.css'
import SideBarComponent from "./sideBarComponent";
import annouce from "../img/annouce.png"
import dashboardImg from "../img/dashboard.png"
import manageCourse from "../img/managerCourse.png"
import manageProfile from "../img/profile.png"
import footer from "../img/footer.png"
import InsDashboardUI from "./Instructor/InsDashboardUI";
import InsManagerCourse from "./Instructor/InsManageCourse";
import InsAnnouncement from "./Instructor/InsAnnouncement"
import InsManageProfile from "./Instructor/InsManageProfile"
import Logo from "../img/Logo.png";


function SideBarInstructor() {    
    return (
    <Router>
        <div id="SideBar">
        <img src={Logo} alt="AppLogo" id="Logo"></img>
            <ul id="SubSideBar">
                <SideBarComponent linkName="/ins/dashboard" idName="dashboard" srcImg={dashboardImg} altName="DashBoard Image" name="DashBoard" h="32" w="40"/>
                <SideBarComponent linkName="/ins/managecourse" idName="manageCourse" srcImg={manageCourse} altName="Manage Courses Image" name="Manage courses" h="40" w="40"/>
                <SideBarComponent linkName="/ins/annoucement" idName="annouce" srcImg={annouce} altName="Annoucement Image" name="Announcements" h="40" w="40"/>
                <SideBarComponent linkName="/ins/manageprofile" idName="profile" srcImg={manageProfile} altName="Manage Profile Image" name="Manage profile" w="40"/>                
            </ul>
            <div id="footer">
                <img src={footer} alt="Footer Image" width="300" height="auto"/>
            </div>
        </div>
        <Switch>
            <Route exact path='/ins/dashboard' component={InsDashboardUI}></Route>
            <Route exact path='/ins/managecourse' component={InsManagerCourse}></Route>
            <Route exact path='/ins/annoucement' component={InsAnnouncement}></Route>
            <Route exact path='/ins/manageprofile' component={InsManageProfile}></Route>            
        </Switch>
    </Router>
    )
}


export default SideBarInstructor;

// const sideBarcomp = e.target.parentElement;
//         console.log(e.target.innerHTML);
//         var imgSrc = ""
//         if (e.target.innerHTML == "DashBoard") {
//             imgSrc = dbHv;
//         }
//         if (e.target.innerHTML == "Manage courses") {
//             imgSrc = mcHv;
//         }
//         if (e.target.innerHTML == "Announcements") {
//             imgSrc = annHv;
//         }
//         if (e.target.innerHTML == "Manage profile") {
//             imgSrc = pfHv;
//         }
//         sideBarcomp.childNodes[0].src=imgSrc;
//         sideBarcomp.style.color = "#f4f4f4";
//         sideBarcomp.style.background = "#160E4D";
//         sideBarcomp.style.width = "325px";
//         sideBarcomp.style.borderRadius = "20px";