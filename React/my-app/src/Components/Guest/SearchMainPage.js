import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import "../Learner/dashboard/LnDashboard.css"
import "./CSS/SearchMainPage.css"

import DropDownBar from "./DropDownList";
import "./CSS/Dropdowns.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCourses, listCoursesQuery } from "../../actions/courseActions";

import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import Loading from "../Loading/Loading";

function SearchMainPage({match}) {
    const query = match.params.token
    console.log('query:', !query)
    const dispatch = useDispatch()
    const courseList = useSelector((state) => state.courseList)
    const {loading, error, courses} = courseList
    useEffect(() => {
        if (!query) dispatch(listCourses())
        else dispatch(listCoursesQuery(query))
    }, [dispatch, query])
    console.log(courses)
    if (loading) return (
        <Loading/>
    )
    else return(
        <div id = "searchResultWrapper" >
            <DropDownBar/>
            <SearchResult className = "cfySearch" courses = {courses}/>
        </div>
    )
}  
function SearchResult({courses}) {

    
    const display = courses.map((data,index) => {
        return(             
            <CourseForYouCpn key={index} imgSrcCourse={data.image}
            Name={data.name} Desc={data.description} Author={data.authorName} Type={data.typeCourse} category={data.category}
            rateScore={data.rateScore} totalRate={data.rateNum} linkName={`/course/${data.fastName}`}/>
        )
    });
    return (
        <div id="listCoursesCFY">
            <Scrollbars>
                {display}
            </Scrollbars>
        </div>
    )


}


function FloatBar() {
    return (
        <div id = "floatBar">
            <div>
                <h1>
                    Learn effectively, learn with us
                </h1>
            </div>
            <Link to="/signup">
                <button>
                    <h2>
                        Join now
                    </h2>
                </button>
            </Link>
        </div>
    )
}



export {FloatBar};
export default SearchMainPage;