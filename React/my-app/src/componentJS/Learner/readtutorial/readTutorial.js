import React from "react";
import "../css/LnReadTutorial.css"
import ReadTutorialCpn from "./readTutorialCpn"
import HeaderLn from '../../headerLn';
import SideBarLearner       from '../../sideBarLearner';
import avt from "../../../img/cheems.png";
function LnReadTutorial() {
    return (
        <div id="lnReadTutorialUI">
            <SideBarLearner/>
            <HeaderLn linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information"/>
            <div id="lnReadTutorial">
                <ReadTutorialCpn />
            </div>
        </div>
    )
}

export default LnReadTutorial;