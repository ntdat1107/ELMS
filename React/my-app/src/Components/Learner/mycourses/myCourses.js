import React from "react";
import MyCoursesCpn from './myCourseCpn'
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
function LnMyCourses() {
    return (
        <div id="lnMyCoursesUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatarLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
            <div id="lnMyCourses">
                <MyCoursesCpn />
            </div>
        </div>
    )
}

export default LnMyCourses;