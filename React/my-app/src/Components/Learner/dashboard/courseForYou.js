import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import CourseForYouCpn from "../../courseForYou/courseForYouCpn";
import { Link } from "react-router-dom"
function CourseForYou({ courses }) {
    
    return (
        <div id="coursesCFY">
            <Link className="Link-coursename" to="/search">
                <p id="titleCFY">Courses For You</p>
            </Link>
            <div id="listCoursesCFY">
                <Scrollbars>
                    {
                        courses && courses.map((data, index) => {
                        return(
                            <CourseForYouCpn key={index} imgSrcCourse={data.image}
                            Name={data.name} Desc={data.description} Author={data.authorName} Type={data.typeCourse} category={data.category}
                            rateScore={data.rateScore} totalRate={data.rateNum} linkName={`/course/${data.fastName}`}/>
                        )
                    })}
                </Scrollbars>
            </div>
        </div>
    )
}

export default CourseForYou
