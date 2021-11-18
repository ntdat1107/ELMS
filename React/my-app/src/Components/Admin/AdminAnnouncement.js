import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListAnnounceCpn from "../ListAnnounceCpn/ListAnnounceCpn";
import NewAnnoun from "../ListAnnounceCpn/NewAnnoun";
import SideBar from "../SideBar/SideBar";
import cheems from "../img/cheems.png";
import Header from "../Header/header";
import AnnounData from "./FakedataforAnnoun";

function AdminAnnounce({ history }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || userInfo.isIns) history.push("/login");
    }, [history, userInfo]);
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
                <ListAnnounceCpn Addition_Part={<NewAnnoun typeUserTemp={0} />} FakeData={AnnounData} />
            </div>
        </div>
    );
}

export default AdminAnnounce;
