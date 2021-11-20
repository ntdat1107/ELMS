import React from 'react'
import { useSelector } from 'react-redux'
import Header from "../Header/header";
import SideBar from "../SideBar/SideBar";
import SearchMainPage, { FloatBar }   from "./SearchMainPage";

import './CSS/HomePage.css'

import './CSS/Search.css'
import SideBarGuest from './SideBarGuest';



function SearchUI({match, history}) {
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
            return (
                <>
                <SideBarGuest/>
                <FloatBar/>
                </>)
        }
        else return (<SideBar typeUserTemp={typeUsr}/>)
    }

    return (
        <div id="searchLearnerUI">
            {sideBar(isGuest)}
            <Header 
                link="/" 
                typeUserTemp={typeUsr}
                history = {history}
            />
            <SearchMainPage match= {match}/>
            {isGuest}&&
        </div>
    )
}

export default SearchUI;