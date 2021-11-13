import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import "./CSS/InsManagerCourse.css"
import "./CSS/InsManagerCourse.css"
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import Courses from "./MOCK_DATA_COURSE.js"

function InsManagerCourse () {
return (
    <div id="insMC-UI">
        <SideBar typeUserTemp={1}/>
        <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
        <div id="insMC">
            <Scrollbars>
                {
                    Courses.map((data, index) => {
                        return (
                            <CourseForYouCpn imgSrcCourse={data.imgSrcCourse} altCourse="CourseImg"
                            Name={data.Name} Desc={data.Desc} Author={data.Author} Type={data.Type}
                            rateScore={data.rateScore} totalRate={data.totalRate} linkName={"/ins/managecourse/" + data.fastName}/>
                        )
                    })
                }
            </Scrollbars>
        </div>
    </div>
    )
}

export default InsManagerCourse;