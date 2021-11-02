import React from "react";
import '../componentCSS/sideBar.css'
import SideBarComponent from "./sideBarComponent";
import annouce from "../img/annouce.png"
import dashboardImg from "../img/dashboard.png"
import manageCourse from "../img/managerCourse.png"
import instr from "../img/instr.png"
import learner from "../img/learner.png"
import footer from "../img/footer.png"


function SideBarAdmin() {    
return (
    <div id="SideBar">
        <ul id="SubSideBar">
            <SideBarComponent linkName="/admin/dashboard" idName="dashboard" srcImg={dashboardImg} altName="DashBoard Image" name="DashBoard" h="32" w="40"/>
            <SideBarComponent linkName="/admin/instructor" idName="instructor" srcImg={instr} altName="Manage Instructor Image" name="Manage Instructor" h="40" w="40"/>
            <SideBarComponent linkName="/admin/learner" idName="learner" srcImg={learner} altName="Manage Learner Image" name="Manage Learner" h="40" w="40"/>
            <SideBarComponent linkName="/admin/managecourse" idName="manageCourse" srcImg={manageCourse} altName="Manage Courses Image" name="Manage courses" h="40" w="40"/>
            <SideBarComponent linkName="/admin/announcement" idName="annouce" srcImg={annouce} altName="Annoucement Image" name="Announcements" h="40" w="40"/>                
        </ul>
        <div id="footer">
            <img src={footer} alt="Footer Image" width="300" height="auto"/>
        </div>
    </div>
    )
}


export default SideBarAdmin;