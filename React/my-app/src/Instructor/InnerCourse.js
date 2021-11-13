import React, { useEffect, useState} from 'react'
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

function InnerCourse({ match }) {
    const [CourseNow, setCourses] = useState([])
    const [isDone, setDone] = useState(false)
    useEffect(() => {
        const fetchCourses = async () => {
            const { data } = await axios.get(`/api/managecourse/${match.params.id}`)
            setCourses(data)
            setDone(true)
        }
        fetchCourses()
    }, [match])
    return (
        <div id="inner-course-UI">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
            <div id="inner-course">
            <div id="row-1">
                {
                    isDone &&
                    <CourseForYouCpn 
                        imgSrcCourse = {CourseNow.imgSrcCourse} 
                        Name = {CourseNow.Name}
                        Desc = {CourseNow.Desc}
                        Author = {CourseNow.Author}
                        Type = {CourseNow.Type}
                        rateScore = {CourseNow.rateScore}
                        totalRate = {CourseNow.totalRate}
                        linkName = {`/ins/managecourse/${CourseNow.fastName}`}
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

