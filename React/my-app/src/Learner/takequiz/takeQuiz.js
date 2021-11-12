import React from "react";
import "./LnTakeQuiz.css"
import TakeQuiz from './takeQuizCpn'
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
function LnTakeQuiz() {
    return (
        <div id="lnTakeQuizUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatarLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
            <div id="lnTakeQuiz">
                <TakeQuiz />
            </div>
        </div>
    )
}

export default LnTakeQuiz;