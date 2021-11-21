import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./LnAnnouncements.css";
import ListAnnoun from "../../ListAnnounceCpn/ListAnnounceCpn";
import Header from "../../Header/header";
import SideBar from "../../SideBar/SideBar";
import DataAnnoun from "./dataForAnnoun";
function LnAnnouncements({ history }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || !userInfo.isLearner) history.push("/login");
    }, [history, userInfo]);
    return (
        <div id="lnAnnouncementsUI">
            <SideBar typeUserTemp={2} />
            <Header history={history} />
            <div id="lnAnnouncements">
                <ListAnnoun typeUserTemp={2} />
            </div>
        </div>
    );
}

export default LnAnnouncements;
