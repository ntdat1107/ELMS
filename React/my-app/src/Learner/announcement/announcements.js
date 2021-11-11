import React from "react";
import "../css/LnAnnouncements.css"
import ListAnnoun from "./listAnnouncement"
import HeaderLn from '../../headerLn';
import SideBarLearner       from '../../sideBarLearner';
import avt from "../../../img/cheems.png";
function LnAnnouncements() {
    return (
        <div id="lnAnnouncementsUI">
            <SideBarLearner/>
            <HeaderLn linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information"/>
            <div id="lnAnnouncements">
                <ListAnnoun />
            </div>
        </div>
    )
}

export default LnAnnouncements;