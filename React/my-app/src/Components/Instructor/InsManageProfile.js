import React, {useEffect} from "react";
import "./CSS/InsManageProfile.css"
import ProfileCpn from "./profileCpn";
import Header from '../Header/header'
import SideBar from "../SideBar/SideBar";
import { useSelector } from 'react-redux'


function InsManageProfile({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
    }, [history, userInfo])
    return (
        <div id="insMP-UI">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
            <div id="insMP">
                <ProfileCpn/>
            </div>
        </div>
    )
}
export default InsManageProfile;