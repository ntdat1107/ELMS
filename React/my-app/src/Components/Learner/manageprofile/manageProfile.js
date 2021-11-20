import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./LnManageProfile.css"
import avtProfile from "../../img/avtProfileLn.png"
import ProfileCpn from "../../Instructor/profileCpn";
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
function LnManageProfile({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isLearner) history.push('/login')
    }, [history, userInfo])
    return (
        <div id="lnManageProfileUI">
            <SideBar typeUserTemp={2}/>
            <Header history = {history}/>
            <div id="lnManageProfile">
                <ProfileCpn srcImage={avtProfile} name="LAM THANH DUONG" />
            </div>
        </div>
    )
}

export default LnManageProfile;