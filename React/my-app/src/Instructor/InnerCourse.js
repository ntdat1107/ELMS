import React from 'react'
import CourseForYouCpn from '../courseForYou/courseForYouCpn';
import './CSS/InnerCourse.css'
import git from "../Learner/img/git.png";
import star from "../Learner/img/star.png";
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


const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C"
}


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

function InnerCourse() {
    return (
        <div id="inner-course-UI">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
            <div id="inner-course">
            <div id="row-1">
                <CourseForYouCpn 
                        imgSrcCourse = {git} 
                        altCourse = "GitCourseImage" 
                        Name = "Complete Git Course to Get Your Dream IT Job 2021" 
                        Desc="The BEST Git course that prepares you for corporate jobs and for RHCSA, RHCE, LFCS, CLNP certifications. 
                        This course is designed for those students who do not have enough time to learn Git." 
                        Author="Mr. Dat" 
                        Type="Best Course" 
                        rateScore="4.9" 
                        imgStar={star} 
                        totalRate="(10,123)"
                        tagColor={styleBC}
                        linkToCourse="/ins/managecourse/inner"
                />
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

