import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseForYouCpn from '../courseForYou/courseForYouCpn';
import './CSS/InnerCourse.css'
import Scrollbars from 'react-custom-scrollbars';
import MyCourse from './MyCourse'
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import SideBar from '../SideBar/SideBar';
import plus from './imgSrc/plus.png'
import deleteImg from './imgSrc/delete.png'
import {Link} from "react-router-dom"
import manageLearner from './imgSrc/manageLearner.png'
import notifyImg from './imgSrc/notify.png'
import axios from 'axios';
import { detailCourse } from '../../actions/courseActions';


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

function OtherAction() {
    return (
        <div id="other-action">
            <div id="head">
                <div id="action-title">Other actions</div>
            </div>
            <div id="action-list">
                <Link className="link-action" to={"/ins/managecourse/manage_my_learners"}>
                    <div id="first-act">
                        <img className="imgAction" src={manageLearner} alt="learnerImg" height="50px" width="50px" />
                        <p className="text-action">Manage learner</p>
                    </div>
                </Link>
                <Link className="link-action" to={"/ins/announcement"}>
                    <div id="second-act">
                        <img className="imgAction" src={notifyImg} alt="notifyImg" height="40px" width="50px" />
                        <p className="text-action">Notify</p>
                    </div>
                </Link>
                    <div id="third-act">
                        <img className="imgAction" src={plus} alt="plusImg" height="50px" width="50px" />
                        <p className="text-action">New section</p>
                    </div>
            </div>
        </div>
    )
}

function InnerCourse({ match, history }) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo) history.push('/login')
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo])


    const courseDetail = useSelector(state => state.courseDetail)
    const { loading, error, course } = courseDetail

    useEffect(() => {
        dispatch(detailCourse(match.params.id))
    }, [dispatch])
    console.log(course)
    return (
        <div id="inner-course-UI">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
            <div id="inner-course">
            <div id="row-1">
                { course.name &&
                <CourseForYouCpn 
                    imgSrcCourse = {course.image} 
                    Name = {course.name}
                    Desc = {course.description}
                    Author = {course.authorName}
                    Type = {course.typeCourse}
                    rateScore = {course.rateScore}
                    totalRate = {course.rateNum}
                    linkName = {`/ins/managecourse/${course.fastName}`}
                />
                }
            </div>
            <div id="row-2">
                <div id="col-1">
                    <Scrollbars>
                        <CourseSection nameSection="Tutorial" isDefault={true} />
                        <CourseSection nameSection="Note" isDefault={true} />
                        <CourseSection nameSection="Quiz" isDefault={true} />
                        <CourseSection nameSection="Video" isDefault={false} />
                    </Scrollbars>
                </div>
                <div id="col-2">
                    <OtherAction />
                    <MyCourse titleName="My other course" heightSize="45px" widthSize="45px" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default InnerCourse

