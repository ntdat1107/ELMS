import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import CourseForYouCpn from "./courseForYouCpn";
import git from "../img/git.png";
import ai from "../img/ai.png";
import django from "../img/django.png";
import js from "../img/js.png";
import linux from "../img/linux.png";
import network from "../img/network.png";
import star from "../img/star.png";

function CourseForYou() {
    return (
        <div id="coursesCFY">
            <p id="titleCFY">Courses For You</p>
            <div id="listCoursesCFY">
                <Scrollbars>
                    <CourseForYouCpn 
                        imgSrcCourse = {git} 
                        altCourse = "GitCourseImage" 
                        Name = "Complete Linux Training Course to Get Your Dream IT Job 2021" 
                        Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                        Author="Mr. Long" 
                        Type="Best Course" 
                        rateScore="4.5" 
                        imgStar={star} 
                        totalRate="(10,123)" 
                    />
                    <CourseForYouCpn 
                        imgSrcCourse = {network} 
                        altCourse = "NetWorkImage" 
                        Name = "Learning Network Technology and Security" 
                        Desc="Learn how to secure and protect your network effectively. An essential course for all system administrators" 
                        Author="Mr. Dat" 
                        Type="New" 
                        rateScore="4.5" 
                        imgStar={star} 
                        totalRate="(9999)" 
                    />
                    <CourseForYouCpn 
                        imgSrcCourse = {linux} 
                        altCourse = "LinuxImage" 
                        Name = "Complete Linux Training Course to Get Your Dream IT Job 2021" 
                        Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                        Author="Mr. Duy" 
                        Type="New" 
                        rateScore="4.5" 
                        imgStar={star} 
                        totalRate="(11113)" 
                    />
                    <CourseForYouCpn 
                        imgSrcCourse = {ai} 
                        altCourse = "AIImage" 
                        Name = "Complete Linux Training Course to Get Your Dream IT Job 2021" 
                        Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                        Author="Mr. Long" 
                        Type="Best Course" 
                        rateScore="4.5" 
                        imgStar={star} 
                        totalRate="(10,000)" 
                    />
                    <CourseForYouCpn 
                        imgSrcCourse = {js} 
                        altCourse = "JSImage" 
                        Name = "Complete Linux Training Course to Get Your Dream IT Job 2021" 
                        Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                        Author="Mr. Long" 
                        Type="New" 
                        rateScore="4.5" 
                        imgStar={star} 
                        totalRate="(12345)" 
                    />
                    <CourseForYouCpn 
                        imgSrcCourse = {django} 
                        altCourse = "DjangoImage" 
                        Name = "Complete Linux Training Course to Get Your Dream IT Job 2021" 
                        Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications" 
                        Author="Mr. Long" 
                        Type="Best Course" 
                        rateScore="4.5" 
                        imgStar={star} 
                        totalRate="(9876)" 
                    />
                </Scrollbars>
            </div>
        </div>
    )
}
export default CourseForYou;
