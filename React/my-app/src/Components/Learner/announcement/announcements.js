import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./LnAnnouncements.css";
import ListAnnoun from "../../ListAnnounceCpn/ListAnnounceCpn";
import MoreOp from './moreOpAnnoun'
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png';
import DataAnnoun from './dataForAnnoun'
function LnAnnouncements({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isLearner) history.push('/login')
    }, [history, userInfo])
    return (
        <div id="lnAnnouncementsUI">
            <SideBar typeUserTemp={2}/>
            <Header history = {history}/>
            <div id="lnAnnouncements">
                <ListAnnoun Addition_Part={<MoreOp />} FakeData={DataAnnoun} />
            </div>
        </div>
    )
}

export default LnAnnouncements;