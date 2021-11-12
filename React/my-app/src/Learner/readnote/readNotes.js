import React from "react";
import "./LnReadNotes.css"
import ReadNotesCpn from "./readNotesCpn"
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
function LnReadNotes() {
    return (
        <div id="lnReadNotesUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatarLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
            <div id="lnReadNotes">
                <ReadNotesCpn />
            </div>
        </div>
    )
}

export default LnReadNotes;