import React from "react";
import '../componentCSS/sideBar.css'
import '../componentCSS/sideBarLearner.css'
import SideBarComponent from "./sideBarComponent";
import dashboardImg from "../img/dashboard.png"
import announceImg from "../img/announce.png"
import myCoursesImg from "../img/myCourses.png"
import takeQuizImg from "../img/takeQuiz.png"
import readTutorialImg from "../img/readTutorial.png"
import readNotesImg from "../img/readNotes.png"
import manageProfileImg from "../img/profile.png"
import footer from "../img/footer.png"


function SideBarInstructor() {    
return (
    <div id="SideBar">
        <ul id="SubSideBar">
            <SideBarComponent linkName="/learner/dashboard" idName="dashboard" srcImg={dashboardImg} altName="DashboardImage" name="Dashboard" h="32" w="40"/>
            <SideBarComponent linkName="/learner/myCourses" idName="mycourses" srcImg={myCoursesImg} altName="MyCoursesImage" name="MyCourses" h="32" w="40"/>
            <SideBarComponent linkName="/learner/takeQuiz" idName="takequiz" srcImg={takeQuizImg} altName="TakeQuizImage" name="TakeQuiz" h="32" w="40"/>
            <SideBarComponent linkName="/learner/readTutorial" idName="readtutorial" srcImg={readTutorialImg} altName="ReadTutorialImage" name="ReadTutorial" h="32" w="40"/>
            <SideBarComponent linkName="/learner/readNotes" idName="readnotes" srcImg={readNotesImg} altName="ReadNotesImage" name="ReadNotes" h="32" w="40"/>
            <SideBarComponent linkName="/learner/announce" idName="announce" srcImg={announceImg} altName="AnnounceImage" name="Announce" h="32" w="40"/>
            <SideBarComponent linkName="/learner/manageProfile" idName="profile" srcImg={manageProfileImg} altName="ManageProfileImage" name="ManageProfile" h="32" w="40"/>

        </ul>
        <div id="footerLn">
            <img src={footer} alt="FooterImage" width="270" height="auto"/>
        </div>
    </div>
    )
}


export default SideBarInstructor;
