import React from "react";
import "./CSS/InsManageProfile.css"
import avtCheems from "../../img/cheems.png"
import ProfileCpn from "./profileCpn";
import SideBarInstructor from '../sideBarInstructor';
import Header from '../header';
import cheems from "../../img/cheems.png"

function InsManageProfile() {
    return (
        <div id="insMP-UI">
            <SideBarInstructor/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
                    idName="information"/>
            <div id="insMP">
                <ProfileCpn srcImage={avtCheems} name="Ngọ Tiến Đạt" />
            </div>
        </div>
    )
}
export default InsManageProfile;