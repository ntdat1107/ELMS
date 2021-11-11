import React from "react";
import ListAnnoun from "./listAnnoun";
import "./CSS/AdminAnnouncement.css"
import NewAnnoun from './NewAnnoun'
import SideBarAdmin from "../Admin-sideBar";
import cheems from "../../img/cheems.png"
import Header from "../header";

function AdminAnnounce () {
    return (
        <div id='adminannounce-UI'>
        <div className="AdminUI">
                <SideBarAdmin/>
                <Header linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
                idName="informationInstructor" typeUserTemp={0}/>
            </div>
        <div id="adminannounce">
            <NewAnnoun/>
            <ListAnnoun/>
        </div>
        </div>
    )
}

export default AdminAnnounce;