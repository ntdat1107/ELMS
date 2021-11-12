import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import CourseForYouCpn from "../../courseForYou/courseForYouCpn";
import data from '../../courseForYou/data'



function CourseForYou() {
    const display = data.map((course) => {
        return(
            <CourseForYouCpn 
                imgSrcCourse = {course.imgSrcCourse}
                altCourse = {course.altCourse}
                Name = {course.name}
                Desc= {course.desc}
                Author= {course.author}
                Type= {course.type}
                rateScore= {course.rateScore}
                imgStar= {course.imgStar}
                totalRate= {course.totalRate}
                tagColor= {course.tagColor}
                linkName="/course/DADA"
            />
        )
    });
    return (
        <div id="coursesCFY">
            <Link className="Link-coursename" to="/learner/search">
                <p id="titleCFY">Courses For You</p>
            </Link>
            <div id="listCoursesCFY">
                <Scrollbars>
                    {display}
                </Scrollbars>
            </div>
        </div>
    )
}
export default CourseForYou;
