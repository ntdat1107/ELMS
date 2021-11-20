import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import {Link} from 'react-router-dom'
import "./CSS/InsManagerCourse.css"
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import { getMyCourses } from "../../actions/myCoursesAction";
function InsManagerCourse ({history}) {
    const dispatch = useDispatch()
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
    }, [history, userInfo])

    const myCourses = useSelector(state => state.myCourses)
    const { loading, error, myCoursesList } = myCourses

    useEffect(() => {
        dispatch(getMyCourses())
    }, [dispatch])
    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    else if (error) {
        return (
            <div id="err">
                <h1>ERROR</h1>
            </div>
        )
    }
    else return (
    <div id="insMC-UI">
        <SideBar typeUserTemp={1}/>
        <Header 
            history = {history}
        />
        <div id="insMC">
            <div className="title-add-course">
                <p>Do you want to create a new course?</p>
                <Link to="/ins/addcourse">
                    <button className="btn-add">
                        Create
                    </button>
                </Link>
            </div>
            <Scrollbars style={{height: "73vh"}}>
                {
                    myCoursesList && myCoursesList.map((data, index) => {
                        return (
                            <CourseForYouCpn key={index} imgSrcCourse={data.image}
                            Name={data.name} Desc={data.description} Author={data.authorName} Type={data.typeCourse}
                            rateScore={data.rateScore} totalRate={data.rateNum} linkName={`/ins/managecourse/${data.fastName}`}/>
                        )
                    })
                }
            </Scrollbars>
        </div>
    </div>
    )
}


export default InsManagerCourse;