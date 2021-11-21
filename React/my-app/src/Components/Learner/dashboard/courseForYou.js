import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import CourseForYouCpn from "../../courseForYou/courseForYouCpn";
import { Link } from "react-router-dom"
import { listCourses } from "../../../actions/courseActions";
import Loading from '../../Loading/Loading'
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import ErrorMsg from '../../Error/ErrorMsg';
function CourseForYou({ history}) {
    const dispatch = useDispatch()
    const courseList = useSelector(state => state.courseList)
    const { loading, error, courses } = courseList

    useEffect(() => {
        dispatch(listCourses())
    }, [dispatch])

    if (loading) {
        return (
            <div className="handleLoading" style={{marginTop: "-300px"}}>
                <SideBar typeUserTemp={2} />
                <Header history={history} />
                <Loading />
            </div>
        )
    }
    else if (error) {
        return (
            <div id="err">
                <SideBar typeUserTemp={2} style={{marginTop: "-300px"}}/>
                <Header history={history} />
                <ErrorMsg msg="Something went wrong!" />
            </div>
        )
    }
    else {
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
}

export default CourseForYou
