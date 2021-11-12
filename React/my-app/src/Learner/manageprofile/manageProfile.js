import React from "react";
import "./LnManageProfile.css"
import avtProfile from "../../img/avtProfileLn.png"
import ProfileCpn from "../../Instructor/profileCpn";
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
function LnManageProfile() {
    return (
        <div id="lnManageProfileUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatarLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
            <div id="lnManageProfile">
                <ProfileCpn srcImage={avtProfile} name="LAM THANH DUONG" />
            </div>
        </div>
    )
}

export default LnManageProfile;