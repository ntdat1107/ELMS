import React from "react";
import "./CSS/InsManageProfile.css"
import avtCheems from "../../img/cheems.png"
import ProfileCpn from "./profileCpn";

function InsManageProfile() {
    return (
        <div id="insMP">
            <ProfileCpn srcImage={avtCheems} name="Ngọ Tiến Đạt" />
        </div>
    )
}
export default InsManageProfile;