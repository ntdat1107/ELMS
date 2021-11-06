import React from "react";
import SearchInstruc from "./SearchInstruc";
import TableLearner from "./TableLearner"
import SideBarAdmin from "../Admin-sideBar";
import HeaderAdmin from '../header';
import cheems from "../../img/cheems.png"

function AdminInstruc () {
    return (
        <div id='adminlearner-UI'>
        <div className="AdminUI">
            <SideBarAdmin/>
            <HeaderAdmin linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
            idName="informationInstructor"/>
        </div>
        <div id="adminlearner">
            <SearchInstruc/>
            <TableLearner />
        </div>
        </div>
    )
}

export default AdminInstruc;