import React from "react";
import './sideBar.css'
import announce from "../img/announce.png"
import dashboardImg from "../img/dashboard.png"
import manageCourse from "../img/managerCourse.png"
import manageProfile from "../img/profile.png"
import myCourses from "../img/myCourses.png"
import takeQuiz from "../img/takeQuiz.png"
import readTutorial from "../img/readTutorial.png"
import readNotes from "../img/readNotes.png"
import footer from "../img/footer.png"
import { NavLink } from "react-router-dom"





function SideBarComponent({
    idName,
    srcImg,
    altName,
    nameSideBar,
    h,
    w,
    linkName,
    func,
    inx,
}) {
    return (
    <li key={inx}> <NavLink activeClassName="ActiveLink" className="insSideBarLink" to={linkName}>
        <button onClick={func}>
            <img id={idName} src={srcImg} alt={altName} height={h} width={w}/>
            <p>{nameSideBar}</p>
        </button> </NavLink>
    </li>
    )
}


function SideBar({
    typeUserTemp,
}) {    
    let sideBarList = [];
    switch (typeUserTemp) {
        //Instructor
        case 1:
            sideBarList = [
                {
                    "idName" : "dashboard",
                    "srcImg" : dashboardImg,
                    "altName" : "DashBoardImage",
                    "nameSideBar" : "DashBoard",
                    "h" : "32",
                    "w" : "40",
                    "linkName" : "/ins/dashboard",
                },
                {
                    "idName" : "manageCourse",
                    "srcImg" : manageCourse,
                    "altName" : "ManageCoursesImage",
                    "nameSideBar" : "Manage Course",
                    "h" : "40",
                    "w" : "40",
                    "linkName" : "/ins/managecourse",
                },
                {
                    "idName" : "announce",
                    "srcImg" : announce,
                    "altName" : "AnnouncementImage",
                    "nameSideBar" : "Announcements",
                    "h" : "40",
                    "w" : "40",
                    "linkName" : "/ins/announcement",
                },
                {
                    "idName" : "profile",
                    "srcImg": manageProfile,
                    "altName" : "ManageProfileImage",
                    "nameSideBar" : "Manage profile",
                    "h" : "auto",
                    "w" : "40",
                    "linkName" : "/ins/manageprofile",
                }
            ]
            break;
        //Learner
        case 0:
            sideBarList = [
                {
                    "idName" : "dashboard",
                    "srcImg" : dashboardImg,
                    "altName" : "DashBoardImage",
                    "nameSideBar" : "DashBoard",
                    "h" : "32",
                    "w" : "40",
                    "linkName" : "/learner/dashboard",
                },
                {
                    "idName" : "myCourses",
                    "srcImg" : myCourses,
                    "altName" : "MyCoursesImage",
                    "nameSideBar" : "My Courses",
                    "h" : "40",
                    "w" : "40",
                    "linkName" : "/learner/mycourses",
                },
                {
                    "idName" : "takeQuiz",
                    "srcImg" : takeQuiz,
                    "altName" : "TakeQuizImage",
                    "nameSideBar" : "Take Quiz",
                    "h" : "40",
                    "w" : "40",
                    "linkName" : "/learner/takequiz",
                },
                {
                    "idName" : "readTutorial",
                    "srcImg" : readTutorial,
                    "altName" : "readTutorialImage",
                    "nameSideBar" : "Read Tutorial",
                    "h" : "40",
                    "w" : "40",
                    "linkName" : "/learner/readtutorial",
                },
                {
                    "idName" : "readNotes",
                    "srcImg" : readNotes,
                    "altName" : "ReadNotesImage",
                    "nameSideBar" : "Read Notes",
                    "h" : "40",
                    "w" : "40",
                    "linkName" : "/learner/readnotes",
                },
                {
                    "idName" : "announce",
                    "srcImg" : announce,
                    "altName" : "AnnouncementImage",
                    "nameSideBar" : "Announcements",
                    "h" : "40",
                    "w" : "40",
                    "linkName" : "/learner/announcement",
                },
                {
                    "idName" : "profile",
                    "srcImg": manageProfile,
                    "altName" : "ManageProfileImage",
                    "nameSideBar" : "Manage profile",
                    "h" : "auto",
                    "w" : "40",
                    "linkName" : "/learner/manageprofile",
                }
            ]
            break;
        //Administrator
        case 2:

            break;
        //Guest
        default:
            break;
    }
return (
    <div id="SideBar">
        <ul id="SubSideBar">
            {
                sideBarList.map((content, index) => {
                    console.log(content.srcImg)
                    return (
                        <SideBarComponent inx={index} linkName={content.linkName} idName={content.idName}
                            srcImg={content.srcImg} altName={content.altName} nameSideBar={content.nameSideBar} 
                            w={content.w} h={content.h}/>
                    )
                })
            }
        </ul>
        <div id="footerIns">
            <img src={footer} alt="FooterImage" width="270" height="auto"/>
        </div>
    </div>
    )
}


export default SideBar;
