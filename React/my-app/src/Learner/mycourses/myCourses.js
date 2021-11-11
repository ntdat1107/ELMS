import React from "react";
import MyCoursesCpn from './myCourseCpn'
import HeaderLn from '../../headerLn';
import SideBarLearner       from '../../sideBarLearner';
import avt from "../../../img/cheems.png";
function LnMyCourses() {
    return (
        <div id="lnMyCoursesUI">
            <SideBarLearner/>
            <HeaderLn linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information"/>
            <div id="lnMyCourses">
                <MyCoursesCpn />
            </div>
        </div>
    )
}

export default LnMyCourses;