import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import "./CSS/InsManagerCourse.css"
import CourseComponent from "./CourseComponent";
import git from "../Learner/img/git.png";
import ai from "../Learner/img/ai.png";
import django from "../Learner/img/django.png";
import js from "../Learner/img/js.png";
import linux from "../Learner/img/linux.png";
import network from "../Learner/img/network.png";
import star from "../Learner/img/star.png";
import "./CSS/InsManagerCourse.css"

import SideBarInstructor from '../sideBarInstructor';
import Header from '../../Header/header'
import cheems from "../../img/cheems.png"

const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C"
}
const styleN = {
    backgroundColor: "#C4C4C4",
    color: "#000000"
}
const styleH = {
    backgroundColor: "#EC5454",
    color: "#FFFFFF"
}
function InsManagerCourse () {
return (
    <div id="insMC-UI">
        <SideBarInstructor/>
        <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
        <div id="insMC">
            <Scrollbars>
                <CourseComponent 
                    imgSrcCourse = {git} 
                    altCourse = "GitCourseImage" 
                    Name = "Complete Git Course to Get Your Dream IT Job 2021" 
                    Desc="The BEST Git course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications. 
                    This course is designed for those students who do not have enough time to learn Git." 
                    Author="Mr. Dat" 
                    Type="Best Course" 
                    rateScore="4.9" 
                    imgStar={star} 
                    totalRate="(10,123)"
                    tagColor={styleBC}
                    linkToCourse="/ins/managecourse/inner"
                />
                <CourseComponent 
                    imgSrcCourse = {network} 
                    altCourse = "NetWorkImage" 
                    Name = "Learning Network Technology and Security" 
                    Desc="Learn how to secure and protect your network effectively. An essential course for all system administrators" 
                    Author="Mr. Dat" 
                    Type="New" 
                    rateScore="4.2" 
                    imgStar={star} 
                    totalRate="(9999)"
                    tagColor={styleN}
                    linkToCourse="/ins/managecourse/inner"
                />
                <CourseComponent 
                    imgSrcCourse = {linux} 
                    altCourse = "LinuxImage" 
                    Name = "Complete Linux Training Course to Get Your Dream IT Job 2021" 
                    Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                    Author="Mr. Dat" 
                    Type="Hot" 
                    rateScore="4.7" 
                    imgStar={star} 
                    totalRate="(11113)"
                    tagColor={styleH}
                    linkToCourse="/ins/managecourse/inner"
                />
                <CourseComponent 
                    imgSrcCourse = {ai} 
                    altCourse = "AIImage" 
                    Name = "Complete AI Course to Get Your Dream IT Job 2021" 
                    Desc="The BEST AI course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                    Author="Mr. Dat" 
                    Type="Best Course" 
                    rateScore="4.8" 
                    imgStar={star} 
                    totalRate="(10,000)"
                    tagColor={styleBC}
                    linkToCourse="/ins/managecourse/inner"
                />
                <CourseComponent 
                    imgSrcCourse = {js} 
                    altCourse = "JSImage" 
                    Name = "Complete Javascript Training Course to Get Your Dream IT Job 2021" 
                    Desc="The BEST Javascript course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                    Author="Mr. Dat" 
                    Type="New" 
                    rateScore="4.5" 
                    imgStar={star} 
                    totalRate="(12345)"
                    tagColor={styleN}
                    linkToCourse="/ins/managecourse/inner"
                />
                <CourseComponent 
                    imgSrcCourse = {django} 
                    altCourse = "DjangoImage" 
                    Name = "Complete Python Django Training Course to Get Your Dream IT Job 2021" 
                    Desc="The BEST Python Django course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                    Author="Mr. Dat" 
                    Type="Best Course" 
                    rateScore="4.8" 
                    imgStar={star} 
                    totalRate="(9876)"
                    tagColor={styleBC}
                    linkToCourse="/ins/managecourse/inner"
                />
            </Scrollbars>
        </div>
    </div>
    )
}

export default InsManagerCourse;