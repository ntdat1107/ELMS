import React from "react";
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import SideBar from "../SideBar/SideBar";
import ListAnnounceCpn from "../ListAnnounceCpn/ListAnnounceCpn";
import AnnounData from "../Admin/FakedataforAnnoun"
import NewAnnoun from "../ListAnnounceCpn/NewAnnoun";


function InsAnnouncement() {
    return (
        <div id="ins-announce-ui">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
            <div id="ins-announce">
                <ListAnnounceCpn Addition_Part={<NewAnnoun typeUserTemp={1}/>} FakeData={AnnounData} />
            </div>
        </div>
    )
}

export default InsAnnouncement;