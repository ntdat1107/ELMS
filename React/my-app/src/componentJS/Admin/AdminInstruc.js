import React from "react";
import SearchInstruc from "./SearchInstruc";
import TableInstruc from "./TableInstruc"
import SideBarAdmin from "../Admin-sideBar";
import HeaderAdmin from '../header';
import cheems from "../../img/cheems.png"

function AdminInstruc () {
    return (
        <div id='admininstruc-UI'>
        <div className="AdminUI">
            <SideBarAdmin/>
            <HeaderAdmin linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
            idName="informationInstructor"/>
        </div>
        <div id="admininstruc">
            <SearchInstruc/>
            <TableInstruc />
        </div>
        </div>
    )
}

export default AdminInstruc;