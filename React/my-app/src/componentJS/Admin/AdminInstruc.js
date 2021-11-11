import React from "react";
import SearchInstruc from "./SearchInstruc";
import TableInstruc from "./TableInstruc"
import SideBarAdmin from "../Admin-sideBar";
import cheems from "../../img/cheems.png"
import Header from '../../Header/header'

function AdminInstruc () {
    return (
        <div id='admininstruc-UI'>
        <div className="AdminUI">
            <SideBarAdmin/>
            <Header linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
            idName="informationInstructor" typeUserTemp={0}/>
        </div>
        <div id="admininstruc">
            <SearchInstruc/>
            <TableInstruc />
        </div>
        </div>
    )
}

export default AdminInstruc;