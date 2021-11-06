import React from "react";
import ListAnnoun from "./listAnnoun";
import "./CSS/AdminAnnouncement.css"
import NewAnnoun from './NewAnnoun'
import SideBarAdmin from "../Admin-sideBar";
import HeaderAdmin from '../header';
import cheems from "../../img/cheems.png"

function AdminAnnounce () {
    return (
        <div id='adminannounce-UI'>
        <div className="AdminUI">
                <SideBarAdmin/>
                <HeaderAdmin linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
                idName="informationInstructor"/>
            </div>
        <div id="adminannounce">
            <NewAnnoun/>
            <ListAnnoun/>
        </div>
        </div>
    )
}

export default AdminAnnounce;