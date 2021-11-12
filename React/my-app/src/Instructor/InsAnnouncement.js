import React from "react";
import ListAnnoun from "../Admin/listAnnoun";
import "./CSS/InsAnnounment.css"
import NewAnn from './new-ann'
import Header from '../../Header/header'
import cheems from "../../img/cheems.png"
import SideBar from "../SideBar/SideBar";


function InsAnnouncement() {
    return (
        <div id="adminannounce">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
            <NewAnn/>
            <ListAnnoun/>
        </div>
    )
}

export default InsAnnouncement;