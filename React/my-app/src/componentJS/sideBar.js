import React, { useState } from "react";
import '../componentCSS/sideBar.css'
import SideBarComponent from "./sideBarComponent";
import annouce from "../img/annouce.png"
import dashboardImg from "../img/dashboard.png"
import manageCourse from "../img/managerCourse.png"
import manageProfile from "../img/profile.png"
import footer from "../img/footer.png"
import dbHv from "../img/dashboardHover.png"
import mcHv from "../img/manageCourseHover.png"
import annHv from "../img/annouceHover.png"
import pfHv from "../img/profileHover.png"



function SideBarInstructor() {    
    const [state, setState] = useState("dashboard")
    const handleChangeSideBar = (e) => {
        const list_s = e.target.parentElement.parentElement.parentElement.childNodes;
        for (let i=0; i<list_s.length; i++){
            list_s[i].className="sbcomponent";
        }
        e.target.parentElement.parentElement.className="sbcomponent-active"
    }
    return (
        <div id="SideBar">
            <ul id="SubSideBar">
                <SideBarComponent cName="sbcomponent" idName="dashboard" srcImg={dashboardImg} altName="DashBoard Image" name="DashBoard" h="32" w="40" func={handleChangeSideBar}/>
                <SideBarComponent cName="sbcomponent" idName="manageCourse" srcImg={manageCourse} altName="Manage Courses Image" name="Manage courses" h="40" w="40" func={handleChangeSideBar} />
                <SideBarComponent cName="sbcomponent" idName="annouce" srcImg={annouce} altName="Annoucement Image" name="Announcements" h="40" w="40" func={handleChangeSideBar} />
                <SideBarComponent cName="sbcomponent" idName="profile" srcImg={manageProfile} altName="Manage Profile Image" name="Manage profile" w="40" func={handleChangeSideBar} />                
            </ul>
            <div id="footer">
                <img src={footer} alt="Footer Image" width="300" height="auto"/>
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