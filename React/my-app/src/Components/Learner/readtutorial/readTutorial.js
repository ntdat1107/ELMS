import React from "react";
import "./LnReadTutorial.css"
import ReadTutorialCpn from "./readTutorialCpn"
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
function LnReadTutorial() {
    return (
        <div id="lnReadTutorialUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatarLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
            <div id="lnReadTutorial">
                <ReadTutorialCpn />
            </div>
        </div>
    )
}

export default LnReadTutorial;