import React from 'react'
import CourseComponent from "./CourseComponent";
import git from "../Learner/img/git.png";
import star from "../Learner/img/star.png";
import "./CSS/TableOfLearner.css"
import SearchHead from './SearchHead';
import TableCpn from './TableCpn';


const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C"
}

function TableOfLearner() {
    return (
        <div id="table-learner">
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
                <SearchHead/>
                <TableCpn />
            </div>
        </div>
    )
}

export default TableOfLearner
