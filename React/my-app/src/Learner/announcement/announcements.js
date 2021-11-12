import React from "react";
import "./LnAnnouncements.css"
import ListAnnoun from "./listAnnouncement"
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
function LnAnnouncements() {
    return (
        <div id="lnAnnouncementsUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatarLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
            <div id="lnAnnouncements">
                <ListAnnoun />
            </div>
        </div>
    )
}

export default LnAnnouncements;