import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import "./CSS/InsManagerCourse.css"
import "./CSS/InsManagerCourse.css"
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import { listCourses } from "../../actions/courseActions";
function InsManagerCourse ({history}) {
    const dispatch = useDispatch()
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo) history.push('/login')
    }, [history, userInfo])

    const courseList = useSelector(state => state.courseList)
    const { loading, error, courses } = courseList

    useEffect(() => {
        dispatch(listCourses())
    }, [dispatch])
return (
    <div id="insMC-UI">
        <SideBar typeUserTemp={1}/>
        <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
        <div id="insMC">
            <Scrollbars>
                {
                    courses.map((data, index) => {
                        return (
                            <CourseForYouCpn key={index} imgSrcCourse={data.image}
                            Name={data.name} Desc={data.description} Author={data.author} Type={data.typeCourse}
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