import React, { useEffect } from "react";
import Header from '../Header/header'
import SideBarGuest from "./SideBarGuest";
import MainBody from "./Explorer"
import './CSS/HomePage.css'
import {useSelector} from 'react-redux'
function HomePageUI({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (userInfo) {
            if (userInfo.isIns) history.push('/ins/dashboard')
            else if (userInfo.isLearner) history.push('/learner/dashboard')
            else if (userInfo.isAdmin) history.push('/admin/dashboard')
        }
    }, [history, userInfo])
    return (
        <div>
            <Header history={history}/>
            <SideBarGuest/>
            <MainBody/>
        </div>
    )
}


export default HomePageUI;