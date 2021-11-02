import React from "react";
//import { Scrollbars } from 'react-custom-scrollbars'
import "./CSS/AdminAnnouncement.css"
import SearchInstruc from "./SearchInstruc";
import TableInstruc from "./TableInstruc"

function AdminInstruc () {
    return (
        <div id="admininstruc">
            <SearchInstruc/>
            <TableInstruc />
        </div>
    )
}

export default AdminInstruc;