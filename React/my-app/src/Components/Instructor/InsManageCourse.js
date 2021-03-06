import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import {Link} from 'react-router-dom'
import "./CSS/InsManagerCourse.css"
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import Loading from '../Loading/Loading'
import ErrorMsg from '../Error/ErrorMsg'
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
            <div className="handleLoading">
                <SideBar typeUserTemp={1} />
                <Header history={history} />
                <Loading />
            </div>
        )
    }
    else if (error) {
        return (
            <div id="err">
                <SideBar typeUserTemp={1} />
                <Header history={history} />
                <ErrorMsg msg={error} />
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
            <Scrollbars style={{height: "72vh"}}>
                {   
                    myCoursesList && myCoursesList.length > 0 ? myCoursesList.map((data, index) => {
                        return (
                            <CourseForYouCpn key={index} imgSrcCourse={data.image}
                            Name={data.name} Desc={data.description} Author={data.authorName} Type={data.typeCourse} category={data.category}
                            rateScore={data.rateScore} totalRate={data.rateNum} linkName={`/ins/managecourse/${data.fastName}`}/>
                        )
                    })
                    :
                    <p id="msg-create"> You do not have courses, click on CREATE button above to create a new Course</p>
                }
            </Scrollbars>
        </div>
    </div>
    )
}


export default InsManagerCourse;