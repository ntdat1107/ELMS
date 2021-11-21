import React, {useEffect} from "react";
import './CSS/InsDashboard.css'
import DbCalendar from "../Calendar/DbCalendar";
import Statistic from "./Statistic";
import MyCourse from "./MyCourse";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import Loading from '../Loading/Loading'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from "../../actions/userActions";
import { getMyCourses, getMyLearnerID } from "../../actions/myCoursesAction";
import dashBoard from './imgSrc/dashBoard.png'
import ErrorMsg from '../Error/ErrorMsg'

function About() {    
    return (
        <div id="bground">
            <p id="titleFun">Learning is Fun!</p>
            <p id="descript">Learn fun awaywhere and anytime without any time limit just through the application.</p>
            <Link to="/ins/managecourse" id="btn">
                <button id="getStarted">Get Started</button> 
            </Link >
        </div>
    )
}


function InsDashboardUI ({history}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo])

    const userProfile = useSelector(state => state.userProfile)
    const {loading, error, userDetail} = userProfile
    useEffect(() => {
        if (!userDetail) {
            dispatch(getUserProfile('profile'))
        }
    }, [dispatch, history, userDetail])
    const getMyLearnersID = useSelector(state => state.getMyLearnersID)
    const { loadingLearner, errorLearner, myLearnerList } = getMyLearnersID
    useEffect(() => {
        if (!myLearnerList) dispatch(getMyLearnerID())
    }, [dispatch, history, myLearnerList])

    const myCourses = useSelector(state => state.myCourses)
    const { loading:loadingListCourse, error:errorListCourse, myCoursesList } = myCourses
    useEffect(() => {
        dispatch(getMyCourses())
    }, [dispatch])

    if (loading || loadingLearner || loadingListCourse) return (
        <div className="handleLoading">
            <SideBar typeUserTemp={1} />
            <Header history={history} />
            <Loading />
        </div>
    )
    else if (error || errorLearner || errorListCourse) return (
        <div id="error">
            <SideBar typeUserTemp={1} />
            <Header history={history} />        
            <ErrorMsg msg={error ? error : errorLearner? errorLearner : errorListCourse} />
        </div>
    )
    else return (
        <div id="insdb">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
            <div id="col1">
                <About />
                <div style={{display:'flex'}}>
                <Statistic learnerCount={myLearnerList? myLearnerList.length : 0} videoCount="20" 
                courseCount={userDetail? userDetail.hasCourse.length : 0}/>
                <MyCourse titleName="My courses" heightSize="60px" widthSize="60px" listCourse={myCoursesList}/>
                </div>
            </div>
            <div id="col2">
                <DbCalendar />
                <img src={dashBoard} alt="Img" style={{marginTop: "30px"}}/>
            </div>
        </div>
    )
}

export default InsDashboardUI;