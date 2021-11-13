import React, { useState, useEffect } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import "./CSS/InsManagerCourse.css"
import "./CSS/InsManagerCourse.css"
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import axios from 'axios'

function InsManagerCourse () {
    const [Courses, setCourses] = useState([])
    useEffect(() => {
        const fetchCourses = async () => {
            const { data } = await axios.get('/api/managecourse')
            setCourses(data)
        }
        fetchCourses()
    }, [])
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
                            <CourseForYouCpn key={index} imgSrcCourse={data.imgSrcCourse}
                            Name={data.Name} Desc={data.Desc} Author={data.Author} Type={data.Type}
                            rateScore={data.rateScore} totalRate={data.totalRate} linkName={`/ins/managecourse/${data.fastName}`}/>
                        )
                    })
                }
            </Scrollbars>
        </div>
    </div>
    )
}

export default InsManagerCourse;