import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseForYouCpn from '../courseForYou/courseForYouCpn';
import './CSS/InnerCourse.css'
import Scrollbars from 'react-custom-scrollbars';
import Loading from '../Loading/Loading'
import Header from '../Header/header'
import SideBar from '../SideBar/SideBar';
import plus from './imgSrc/plus.png'
import deleteImg from './imgSrc/delete.png'
import {Link} from "react-router-dom"
import manageLearner from './imgSrc/manageLearner.png'
import { deleteCourseNow } from '../../actions/myCoursesAction.js';
import { getMyCourseByFastName } from '../../actions/myCoursesAction.js';
import ErrorMsg from '../Error/ErrorMsg';


function CourseSection({
    nameSection,
    isDefault,
}) {
    return (
        <div className="section-cpn">
            <div id="name-section">
                <p className="name-section-cpn">{nameSection}</p>
                <img src={plus} alt="PlusImg" width="45px" height="45px"/>
                {!isDefault && <img src={deleteImg} alt="deleteImg" width="35px" height="45px"/>}
            </div>
            <div className="subsection-contain" id="one">
                <p className="subsection-cpn">{nameSection + " 1: Introduce"}</p>
                <img src={deleteImg} alt="deleteImg" width="20px" height="25px"/>
            </div>
            <div className="subsection-contain" id="two">
                <p className="subsection-cpn">{nameSection + " 2: Guide"}</p>
                <img src={deleteImg} alt="deleteImg" width="20px" height="25px"/>
            </div>
        </div>
    )
}

function OtherAction({manageCourseLink, deleteHandle}) {
    return (
        <div id="other-action">
            <div id="head">
                <div id="action-title">Other actions</div>
            </div>
            <div id="action-list">
                <Link className="link-action" to={manageCourseLink}>
                    <div id="first-act">
                        <img className="imgAction" src={manageLearner} alt="learnerImg" height="50px" width="50px" />
                        <p className="text-action">Manage learner</p>
                    </div>
                </Link>
                <div id="third-act" onClick={deleteHandle}>
                    <img className="imgAction" src={deleteImg} alt="delimg" height="50px" width="40px" />
                    <p className="text-action">Delete course</p>
                </div>
            </div>
        </div>
    )
}

function InnerCourse({ match, history }) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    


    const myOneCourse = useSelector(state => state.myOneCourse)
    const { loading, error, myOneCourseDetail } = myOneCourse

    const courseDelete = useSelector(state => state.courseDelete)
    const { success } = courseDelete

    useEffect(() => {
        if (userInfo && userInfo.isIns) dispatch(getMyCourseByFastName(match.params.id))
        else history.push('/login')
    }, [history, dispatch, success])

    useEffect(() => {
        if (!myOneCourseDetail) history.push('/login')
    }, [success])


    const deleteHandle = (e) => {
        e.stopPropagation();
        if (window.confirm("Are you sure that you want to delete this course"))
        dispatch(deleteCourseNow(match.params.id))
    }
    if (loading) {
        return (
            <div className="loadingUI">
                <SideBar typeUserTemp={1} />
                <Header history={history}/>
                <Loading />
            </div>
        )
    }
    else if (error) {
        return (
            <div id="errorUI">
            <SideBar typeUserTemp={1}/>
            <Header history={history} />
            <ErrorMsg msg={error.message} />
            </div>
        )
    }
    else 
    return (
        <div id="inner-course-UI">
            <SideBar typeUserTemp={1}/>
            <Header history={history} />
            <div id="inner-course">
            <div id="row-1">
                { myOneCourseDetail && myOneCourseDetail.name &&
                <CourseForYouCpn 
                    imgSrcCourse = {myOneCourseDetail.image} 
                    Name = {myOneCourseDetail.name}
                    Desc = {myOneCourseDetail.description}
                    Author = {myOneCourseDetail.authorName}
                    Type = {myOneCourseDetail.typeCourse}
                    category = {myOneCourseDetail.category}
                    rateScore = {myOneCourseDetail.rateScore}
                    totalRate = {myOneCourseDetail.rateNum}
                    linkName = {`/ins/managecourse/${myOneCourseDetail.fastName}`}
                />
                }
            </div>
            <div id="row-2">
                <div id="col-1">
                    <Scrollbars>
                        <div id="title-name">
                            <p className="name-section-cpn">Lesson List</p>
                            <Link id="linkToVideoDetail" to={`/course/${match.params.id}/1`}>View lesson detail</Link>
                            <Link id="linkToAddNewVideo" to={`/ins/managecourse/${match.params.id}/addlesson`}>Add new lesson</Link>
                        </div>
                    </Scrollbars>
                </div>
                <div id="col-2">
                    <OtherAction deleteHandle={deleteHandle} manageCourseLink={`/ins/managecourse/${myOneCourseDetail.fastName}/manage_my_learners`}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default InnerCourse

