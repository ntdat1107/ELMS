import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import CourseCpninad from "./CoureCpninad";
import data from '../courseForYou/data'
import "./CSS/AdminCourse.css";

function Courseinad() {
    const display = data.map((course) => {
        return(
            <CourseCpninad
                imgSrcCourse= {course.imgSrcCourse}
                altCourse= {course.altCourse}
                Name= {course.name}
                Desc= {course.desc}
                Author= {course.author}
                Type= {course.type}
                rateScore= {course.rateScore}
                imgStar= {course.imgStar}
                totalRate= {course.totalRate}
                tagColor= {course.tagColor}
            />
        )
    });
    return (
        <div id="courseinad">
            <Scrollbars>
                {display}
            </Scrollbars>
        </div>
    );
}
export default Courseinad;
