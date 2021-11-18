import React, {useEffect} from "react";
import "./CSS/InsManageProfile.css"
import avtCheems from "../img/cheems.png"
import ProfileCpn from "./profileCpn";
import Header from '../Header/header'
import SideBar from "../SideBar/SideBar";
import { useSelector } from 'react-redux'


function InsManageProfile({history}) {
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo])
    return (
        <div id="insMP-UI">
            <SideBar typeUserTemp={1}/>
            <Header/>
            <div id="insMP">
                <ProfileCpn srcImage={avtCheems} name="Ngọ Tiến Đạt" />
            </div>
        </div>
    )
}
export default InsManageProfile;