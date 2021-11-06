import React from "react";
import "../css/LnTakeQuiz.css"
import TakeQuiz from './takeQuizCpn'
import Header from '../../header';
import SideBarLearner       from '../../sideBarLearner';
import avt from "../../../img/cheems.png";
function LnTakeQuiz() {
    return (
        <div id="lnTakeQuizUI">
            <SideBarLearner/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information"/>
            <div id="lnTakeQuiz">
                <TakeQuiz />
            </div>
        </div>
    )
}

export default LnTakeQuiz;