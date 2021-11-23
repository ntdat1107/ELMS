import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import "./LnManageProfile.css"
import avtProfile from "../../img/avtProfileLn.png"
import ProfileCpn from "../../Instructor/profileCpn";
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
function LnManageProfile({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isLearner) history.push('/login')
    }, [history, userInfo])
    console.log(userInfo && userInfo.firstName)
    return (
        <div id="lnManageProfileUI">
            <SideBar typeUserTemp={2}/>
            <Header history = {history}/>
            <div id="lnManageProfile">
                <ProfileCpn />
            </div>
        </div>
    )
}

export default LnManageProfile;