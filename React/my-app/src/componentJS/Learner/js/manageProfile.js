import React from "react";
import "../css/LnManageProfile.css"
import avtCheems from "../../../img/cheems.png"
import ProfileCpn from "../../Instructor/profileCpn";

function LnManageProfile() {
    return (
        <div id="lnManageProfile">
            <ProfileCpn srcImage={avtCheems} name="LAM THANH DUONG" />
        </div>
    )
}

export default LnManageProfile;