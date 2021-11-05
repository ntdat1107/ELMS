import React from "react";
import ListAnnoun from "./listAnnoun";
import "./CSS/AdminAnnouncement.css"
import NewAnnoun from './NewAnnoun'

function AdminAnnounce () {
    return (
        <div id="adminannounce">
            <NewAnnoun/>
            <ListAnnoun/>
        </div>
    )
}

export default AdminAnnounce;