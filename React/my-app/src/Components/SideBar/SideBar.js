import React from "react";
import "./sideBar.css";
import announce from "../img/announce.png";
import dashboardImg from "../img/dashboard.png";
import manageCourse from "../img/manageCourse.png";
import manageProfile from "../img/profile.png";
import myCourses from "../img/myCourses.png";
import manageIns from "../img/manageIns.png";
import manageLn from "../img/manageLn.png";
import footer from "../img/footer.png";
import { NavLink } from "react-router-dom";

function SideBarComponent({ idName, srcImg, altName, nameSideBar, h, w, linkName, func}) {
    return (
        <li>
            <NavLink activeClassName="ActiveLink" className="insSideBarLink" to={linkName}>
                <button onClick={func}>
                    <img id={idName} src={srcImg} alt={altName} height={h} width={w} />
                    <p>{nameSideBar}</p>
                </button>
            </NavLink>
        </li>
    );
}

function SideBar({ typeUserTemp }) {
    let sideBarList = [];
    switch (typeUserTemp) {
        //Instructor
        case 1:
            sideBarList = [
                {
                    idName: "dashboard",
                    srcImg: dashboardImg,
                    altName: "DashBoardImage",
                    nameSideBar: "DashBoard",
                    h: "32",
                    w: "40",
                    linkName: "/ins/dashboard",
                },
                {
                    idName: "manageCourse",
                    srcImg: manageCourse,
                    altName: "ManageCoursesImage",
                    nameSideBar: "Manage Course",
                    h: "40",
                    w: "40",
                    linkName: "/ins/managecourse",
                },
                {
                    idName: "announce",
                    srcImg: announce,
                    altName: "AnnouncementImage",
                    nameSideBar: "Announcements",
                    h: "40",
                    w: "40",
                    linkName: "/ins/announcement",
                },
                {
                    idName: "profile",
                    srcImg: manageProfile,
                    altName: "ManageProfileImage",
                    nameSideBar: "Manage profile",
                    h: "auto",
                    w: "40",
                    linkName: "/ins/manageprofile",
                },
            ];
            break;
        //Learner
        case 2:
            sideBarList = [
                {
                    idName: "dashboard",
                    srcImg: dashboardImg,
                    altName: "DashBoardImage",
                    nameSideBar: "DashBoard",
                    h: "32",
                    w: "40",
                    linkName: "/learner/dashboard",
                },
                {
                    idName: "mycourses",
                    srcImg: myCourses,
                    altName: "MyCoursesImage",
                    nameSideBar: "My Courses",
                    h: "32",
                    w: "40",
                    linkName: "/learner/mycourses",
                },
                {
                    idName: "announce",
                    srcImg: announce,
                    altName: "AnnouncementImage",
                    nameSideBar: "Announcements",
                    h: "32",
                    w: "40",
                    linkName: "/learner/announcements",
                },
                {
                    idName: "profile",
                    srcImg: manageProfile,
                    altName: "ManageProfileImage",
                    nameSideBar: "Manage profile",
                    h: "32",
                    w: "40",
                    linkName: "/learner/manageprofile",
                },
            ];
            break;
        //Administrator
        case 0:
            sideBarList = [
                {
                    idName: "dashboard",
                    srcImg: dashboardImg,
                    altName: "DashBoardImage",
                    nameSideBar: "DashBoard",
                    h: "32",
                    w: "40",
                    linkName: "/admin/dashboard",
                },
                {
                    idName: "manageins",
                    srcImg: manageIns,
                    altName: "ManageInsImage",
                    nameSideBar: "Manage Instructor",
                    h: "32",
                    w: "40",
                    linkName: "/admin/manageinstructor",
                },
                {
                    idName: "manageln",
                    srcImg: manageLn,
                    altName: "ManageLnImage",
                    nameSideBar: "Manage Learner",
                    h: "32",
                    w: "40",
                    linkName: "/admin/managelearner",
                },
                {
                    idName: "managecourse",
                    srcImg: manageCourse,
                    altName: "manageCourseImage",
                    nameSideBar: "Manage Course",
                    h: "32",
                    w: "40",
                    linkName: "/admin/managecourse",
                },
                {
                    idName: "announce",
                    srcImg: announce,
                    altName: "AnnouncementImage",
                    nameSideBar: "Announcements",
                    h: "32",
                    w: "40",
                    linkName: "/admin/announcement",
                },
            ];
            break;
        //Guest
        default:
            break;
    }
    return (
        <div id="SideBar">
            <ul id="SubSideBar">
                {sideBarList.map((content, index) => {
                    return (
                        <SideBarComponent
                            key={index}
                            linkName={content.linkName}
                            idName={content.idName}
                            srcImg={content.srcImg}
                            altName={content.altName}
                            nameSideBar={content.nameSideBar}
                            w={content.w}
                            h={content.h}
                        />
                    );
                })}
            </ul>
            <div id="footer">
                <img src={footer} alt="FooterImage" width="270" height="auto" />
            </div>
        </div>
    );
}

export default SideBar;
