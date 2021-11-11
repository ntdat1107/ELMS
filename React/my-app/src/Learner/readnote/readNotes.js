import React from "react";
import "../css/LnReadNotes.css"
import ReadNotesCpn from "./readNotesCpn"
import HeaderLn from '../../headerLn';
import SideBarLearner       from '../../sideBarLearner';
import avt from "../../../img/cheems.png";
function LnReadNotes() {
    return (
        <div id="lnReadNotesUI">
            <SideBarLearner/>
            <HeaderLn linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information"/>
            <div id="lnReadNotes">
                <ReadNotesCpn />
            </div>
        </div>
    )
}

export default LnReadNotes;