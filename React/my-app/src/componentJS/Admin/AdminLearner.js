import React from "react";
import SearchInstruc from "./SearchInstruc";
import TableLearner from "./TableLearner"
import SideBarAdmin from "../Admin-sideBar";
import cheems from "../../img/cheems.png"
import Header from "../header";

function AdminLearner () {
    return (
        <div id='adminlearner-UI'>
        <div className="AdminUI">
            <SideBarAdmin/>
            <Header linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
            idName="informationInstructor" typeUserTemp={0}/>
        </div>
        <div id="adminlearner">
            <SearchInstruc/>
            <TableLearner />
        </div>
        </div>
    )
}

export default AdminLearner;