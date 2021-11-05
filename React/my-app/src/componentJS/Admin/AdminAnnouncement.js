import React from "react";
import ListAnnoun from "./listAnnoun";
import "./CSS/AdminAnnouncement.css"
import NewAnnoun from './NewAnnoun'

function AdminAnnounce () {
    return (
        <div id="adminannounce">
            <ListAnnoun/>
            <NewAnnoun/>
        </div>
    )
}

export default AdminAnnounce;