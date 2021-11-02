import React from "react";
import '../css/sideBarLn.css'
import SideBarComponent from "./sideBarCpn";
import dashboardImg from "../img/dashboard.png"
import myCoursesImg from "../img/myCourses.png"
import takeQuizImg from "../img/takeQuiz.png"
import readTutorialImg from "../img/readTutorial.png"
import readNotesImg from "../img/readNotes.png"
import announcementsImg from "../img/announcements.png"
import manageProfileImg from "../img/manageProfile.png"
import footer from "../../../img/footer.png"


function SideBarLearner() {    
return (
    <div id="SideBar">
        <ul id="SubSideBar">
            <SideBarComponent 
                linkName="/learner/dashboard" 
                idName="dashboard" 
                srcImg={dashboardImg} 
                altName="dashBoard Image" 
                name="Dashboard" 
                h="32" 
                w="40"
            />
            <SideBarComponent 
                linkName="/learner/mycourses" 
                idName="mycourses" 
                srcImg={myCoursesImg} 
                altName="myCourses Image" 
                name="MyCourses" 
                h="32" 
                w="40"
            />  
            <SideBarComponent 
                linkName="/learner/takequiz" 
                idName="takeQuiz" 
                srcImg={takeQuizImg} 
                altName="takeQuiz Image" 
                name="TakeQuiz" 
                h="32" 
                w="40"
            />  
            <SideBarComponent 
                linkName="/learner/readtutorial" 
                idName="readTutorial" 
                srcImg={readTutorialImg} 
                altName="readTutorial Image" 
                name="ReadTutorial" 
                h="32" 
                w="40"
            />  
            <SideBarComponent 
                linkName="/learner/readnotes" 
                idName="readNotes" 
                srcImg={readNotesImg} 
                altName="readNotes Image" 
                name="ReadNotes" 
                h="32" 
                w="40"
            />  
            <SideBarComponent 
                linkName="/learner/announcements" 
                idName="announcements" 
                srcImg={announcementsImg} 
                altName="announcements Image" 
                name="Announcements" 
                h="32" 
                w="40"
            />  
            <SideBarComponent 
                linkName="/learner/manageprofile" 
                idName="manageProfile" 
                srcImg={manageProfileImg} 
                altName="manageProfile Image" 
                name="ManageProfile" 
                h="32" 
                w="40"
            />              
        </ul>
        <div id="footer">
            <img src={footer} alt="footerImage" width="300" height="auto"/>
        </div>
    </div>
    )
}


export default SideBarLearner;

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