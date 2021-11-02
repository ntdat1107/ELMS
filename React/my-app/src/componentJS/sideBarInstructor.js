import React from "react";
import '../componentCSS/sideBar.css'
import SideBarComponent from "./sideBarComponent";
import annouce from "../img/annouce.png"
import dashboardImg from "../img/dashboard.png"
import manageCourse from "../img/managerCourse.png"
import manageProfile from "../img/profile.png"
import footer from "../img/footer.png"


function SideBarInstructor() {    
return (
    <div id="SideBar">
        <ul id="SubSideBar">
            <SideBarComponent linkName="/ins/dashboard" idName="dashboard" srcImg={dashboardImg} altName="DashBoardImage" name="DashBoard" h="32" w="40"/>
            <SideBarComponent linkName="/ins/managecourse" idName="manageCourse" srcImg={manageCourse} altName="ManageCourses Image" name="Manage courses" h="40" w="40"/>
            <SideBarComponent linkName="/ins/announcement" idName="annouce" srcImg={annouce} altName="AnnoucementImage" name="Announcements" h="40" w="40"/>
            <SideBarComponent linkName="/ins/manageprofile" idName="profile" srcImg={manageProfile} altName="ManageProfile Image" name="Manage profile" w="40"/>                
        </ul>
        <div id="footer">
            <img src={footer} alt="FooterImage" width="300" height="auto"/>
        </div>
    </div>
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