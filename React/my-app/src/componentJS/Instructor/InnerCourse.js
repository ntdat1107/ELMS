import React from 'react'
import CourseComponent from "./CourseComponent";
import './CSS/InnerCourse.css'
import git from "../Learner/img/git.png";
import star from "../Learner/img/star.png";
import Scrollbars from 'react-custom-scrollbars';
import CourseSection from './CourseSection';
import MyCourse from './MyCourse'
import OtherAction from './OtherAction';

import SideBarInstructor from '../sideBarInstructor';
import Header from '../header';
import cheems from "../../img/cheems.png"


const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C"
}

function InnerCourse() {
    return (
        <div id="inner-course-UI">
            <SideBarInstructor/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
            <div id="inner-course">
            <div id="row-1">
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
            </div>
            <div id="row-2">
                <div id="col-1">
                    <Scrollbars>
                        <CourseSection nameSection="Tutorial" isDefault={true} />
                        <CourseSection nameSection="Note" isDefault={true} />
                        <CourseSection nameSection="Quiz" isDefault={true} />
                        <CourseSection nameSection="Video" isDefault={false} />
                    </Scrollbars>
                </div>
                <div id="col-2">
                    <OtherAction />
                    <MyCourse titleName="My other course" heightSize="45px" widthSize="45px" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default InnerCourse

