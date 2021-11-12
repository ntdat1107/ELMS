import React from "react";
import "./CSS/InsManageProfile.css"
import avtCheems from "../../img/cheems.png"
import ProfileCpn from "./profileCpn";
import Header from '../../Header/header'
import cheems from "../../img/cheems.png"
import SideBar from "../SideBar/SideBar";

function InsManageProfile() {
    return (
        <div id="insMP-UI">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
                    idName="information" typeUserTemp={1}/>
            <div id="insMP">
                <ProfileCpn srcImage={avtCheems} name="Ngọ Tiến Đạt" />
            </div>
        </div>
    )
}
export default InsManageProfile;