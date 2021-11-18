import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import CourseForYouCpn from "../../courseForYou/courseForYouCpn";
import { Link } from "react-router-dom"
import { listCourses } from "../../../actions/courseActions";
function CourseForYou() {
    const dispatch = useDispatch()
    const courseList = useSelector(state => state.courseList)
    const { loading, error, courses } = courseList

    useEffect(() => {
        dispatch(listCourses())
    }, [dispatch])
    const display = courses.map((data, index) => {
        return(
            <CourseForYouCpn key={index} imgSrcCourse={data.image}
            Name={data.name} Desc={data.description} Author={data.authorName} Type={data.typeCourse}
            rateScore={data.rateScore} totalRate={data.rateNum} linkName={`/course/${data.fastName}`}/>
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

export default CourseForYou
