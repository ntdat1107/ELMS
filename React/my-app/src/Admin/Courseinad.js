import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import CourseCpninad from "./CoureCpninad";
import git from "../Learner/img/git.png";
import ai from "../Learner/img/ai.png";
import django from "../Learner/img/django.png";
import js from "../Learner/img/js.png";
import linux from "../Learner/img/linux.png";
import network from "../Learner/img/network.png";
import star from "../Learner/img/star.png";
import "./CSS/AdminCourse.css";

const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C",
};
const styleN = {
    backgroundColor: "#C4C4C4",
    color: "#000000",
};
const styleH = {
    backgroundColor: "#EC5454",
    color: "#FFFFFF",
};

function Courseinad() {
    return (
        <div id="courseinad">
            <Scrollbars>
                <CourseCpninad
                    imgSrcCourse={git}
                    altCourse="GitCourseImage"
                    Name="Complete Linux Training Course to Get Your Dream IT Job 2021"
                    Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications"
                    Author="Mr. Long"
                    Type="Best Course"
                    rateScore="4.5"
                    imgStar={star}
                    totalRate="(10,123)"
                    tagColor={styleBC}
                />

                <CourseCpninad
                    imgSrcCourse={network}
                    altCourse="NetWorkImage"
                    Name="Learning Network Technology and Security"
                    Desc="Learn how to secure and protect your network effectively. An essential course for all system administrators"
                    Author="Mr. Dat"
                    Type="New"
                    rateScore="4.5"
                    imgStar={star}
                    totalRate="(9999)"
                    tagColor={styleN}
                />

                <CourseCpninad
                    imgSrcCourse={linux}
                    altCourse="LinuxImage"
                    Name="Complete Linux Training Course to Get Your Dream IT Job 2021"
                    Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications"
                    Author="Mr. Duy"
                    Type="Hot"
                    rateScore="4.5"
                    imgStar={star}
                    totalRate="(11113)"
                    tagColor={styleH}
                />

                <CourseCpninad
                    imgSrcCourse={ai}
                    altCourse="AIImage"
                    Name="Complete Linux Training Course to Get Your Dream IT Job 2021"
                    Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications"
                    Author="Mr. Long"
                    Type="Best Course"
                    rateScore="4.5"
                    imgStar={star}
                    totalRate="(10,000)"
                    tagColor={styleBC}
                />

                <CourseCpninad
                    imgSrcCourse={js}
                    altCourse="JSImage"
                    Name="Complete Linux Training Course to Get Your Dream IT Job 2021"
                    Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications"
                    Author="Mr. Long"
                    Type="New"
                    rateScore="4.5"
                    imgStar={star}
                    totalRate="(12345)"
                    tagColor={styleN}
                />

                <CourseCpninad
                    imgSrcCourse={django}
                    altCourse="DjangoImage"
                    Name="Complete Linux Training Course to Get Your Dream IT Job 2021"
                    Desc="The BEST Linux Administration course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications"
                    Author="Mr. Long"
                    Type="Best Course"
                    rateScore="4.5"
                    imgStar={star}
                    totalRate="(9876)"
                    tagColor={styleBC}
                />
            </Scrollbars>
        </div>
    );
}
export default Courseinad;
