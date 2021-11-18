import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../Header/header";
import avt from "../img/cheems.png"
import SideBar from "../SideBar/SideBar";
import SearchMainPage   from "./SearchMainPage";

import './CSS/HomePage.css'

import './CSS/Search.css'
import SideBarGuest from './SideBarGuest';
import { func } from 'prop-types';



function SearchLearnerUI({match, history}) {
    let typeUsr = -1;
    let isGuest = false;
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    if (!userInfo) isGuest = true
    else if (userInfo.isIns) typeUsr = 1
    else if (userInfo.isLearner) typeUsr = 2

    console.log(isGuest)
    console.log(1)


    // useEffect(() => {
    //     if (!userInfo) history.push('/login')
    //     // else if (!userInfo.isIns) push error not type
    // }, [history, userInfo])
    const sideBar = (isGuest) =>  {
        if (isGuest == true) {
            return (<SideBarGuest/>)
        }
        else return (<SideBar typeUserTemp={typeUsr}/>)
    }

    return (
        <div id="searchLearnerUI">
            {sideBar(isGuest)}
            <Header 
                link="/" 
                typeUserTemp={typeUsr}
            />
            <SearchMainPage/>
        </div>
    )
}

export default SearchLearnerUI;