import React from "react";
import ListAnnoun from "../Admin/listAnnoun";
import "./CSS/InsAnnounment.css"
import NewAnn from './new-ann'


function InsAnnouncement() {
    return (
        <div id="adminannounce">
            <NewAnn/>
            <ListAnnoun/>
        </div>
    )
}

export default InsAnnouncement;