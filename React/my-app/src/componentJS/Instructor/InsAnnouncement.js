import React from "react";
import {Helmet} from "react-helmet";
import ListAnnoun from "../Admin/listAnnoun";
import "./CSS/InsAnnounment.css"

function InsAnnouncement() {
    return (
        <div id="adminannounce">
            <ListAnnoun/>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Annoucements</title>
            </Helmet>
        </div>
    )
}

export default InsAnnouncement;