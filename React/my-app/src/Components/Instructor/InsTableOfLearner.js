import React, {useEffect} from 'react'
import CourseForYouCpn from '../courseForYou/courseForYouCpn';
import git from "../Learner/img/course/git1.jpg";
import star from "../Learner/img/rateStar/star4_5.png";
import "./CSS/TableOfLearner.css"
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import SearchInTable from '../TableManage/SearchInTable';
import TableManage from '../TableManage/TableManage';
import { useSelector } from 'react-redux'


const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C"
}

function TableOfLearner({history}) {
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo) history.push('/login')
    }, [history, userInfo])
    return (
        <div id="managelearner">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
                    idName="information" typeUserTemp={1}/>
        <div id="table-learner">
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
                <SearchInTable typeUserTemp={1}/>
                <TableManage />
            </div>
        </div>
        </div>
    )
}

export default TableOfLearner
