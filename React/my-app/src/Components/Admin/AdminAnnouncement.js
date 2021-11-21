import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ListAnnounceCpn from "../ListAnnounceCpn/ListAnnounceCpn";
import NewAnnoun from "../ListAnnounceCpn/NewAnnoun";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";

function AdminAnnounce({ history }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) history.push("/login");
    }, [history, userInfo]);

    return (
        <div id="adminannounce-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
            </div>
            <div id="adminannounce">
                <ListAnnounceCpn Addition_Part={<NewAnnoun typeUserTemp={0} />} typeUserTemp={0} />
            </div>
        </div>
    );
}

export default AdminAnnounce;
