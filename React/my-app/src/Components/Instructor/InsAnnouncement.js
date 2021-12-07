import React, { useEffect } from "react";
import Header from "../Header/header";
import SideBar from "../SideBar/SideBar";
import ListAnnounceCpn from "../ListAnnounceCpn/ListAnnounceCpn";
import NewAnnoun from "../ListAnnounceCpn/NewAnnoun";
import { useSelector } from "react-redux";

function InsAnnouncement({ history }) {
    // Check if logged in
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push("/login");
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo]);
    return (
        <div id="ins-announce-ui">
            <SideBar typeUserTemp={1} />
            <Header history={history} />
            <div id="ins-announce">
                <ListAnnounceCpn
                    Addition_Part={<NewAnnoun typeUserTemp={1} />}
                    typeUserTemp={1}
                    history={history}
                />
            </div>
        </div>
    );
}

export default InsAnnouncement;
