import React from "react";
import "../css/LnManageProfile.css"
import avtCheems from "../../../img/cheems.png"
import ProfileCpn from "../../Instructor/profileCpn";
import HeaderLn from '../../headerLn';
import SideBarLearner       from '../../sideBarLearner';
import avt from "../../../img/cheems.png";
function LnManageProfile() {
    return (
        <div id="lnManageProfileUI">
            <SideBarLearner/>
            <HeaderLn linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information"/>
            <div id="lnManageProfile">
                <ProfileCpn srcImage={avtCheems} name="LAM THANH DUONG" />
            </div>
        </div>
    )
}

export default LnManageProfile;