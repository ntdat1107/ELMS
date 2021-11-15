import React from "react";
import SearchInstruc from "./SearchInstruc";
import TableInstruc from "./TableInstruc";
import SideBar from "../SideBar/SideBar";
import cheems from "../img/cheems.png";
import Header from "../Header/header";

function AdminInstruc() {
    return (
        <div id="admininstruc-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header
                    linkAvt="/admin/dashboard"
                    link="/admin/dashboard"
                    srcImg={cheems}
                    name="Mai Đức Long"
                    gmail="maiduclong@gmail.com"
                    type="Admin"
                    idName="informationInstructor"
                    typeUserTemp={0}
                />
            </div>
            <div id="admininstruc">
                <SearchInstruc />
                <TableInstruc />
            </div>
        </div>
    );
}

export default AdminInstruc;
