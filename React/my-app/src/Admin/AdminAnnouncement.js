import React from "react";
import ListAnnoun from "./listAnnoun";
import "./CSS/AdminAnnouncement.css";
import NewAnnoun from "./NewAnnoun";
import SideBar from "../SideBar/SideBar";
import cheems from "../img/cheems.png";
import Header from "../Header/header";

function AdminAnnounce() {
    return (
        <div id="adminannounce-UI">
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
            <div id="adminannounce">
                <NewAnnoun />
                <ListAnnoun />
            </div>
        </div>
    );
}

export default AdminAnnounce;
