import React, {useEffect} from "react";
import Header from '../Header/header'
import SideBar from "../SideBar/SideBar";
import ListAnnounceCpn from "../ListAnnounceCpn/ListAnnounceCpn";
import AnnounData from "../Admin/FakedataforAnnoun"
import NewAnnoun from "../ListAnnounceCpn/NewAnnoun";
import { useSelector } from 'react-redux'


function InsAnnouncement({history}) {
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo])
    return (
        <div id="ins-announce-ui">
            <SideBar typeUserTemp={1}/>
            <Header />
            <div id="ins-announce">
                <ListAnnounceCpn Addition_Part={<NewAnnoun typeUserTemp={1}/>} FakeData={AnnounData} />
            </div>
        </div>
    )
}

export default InsAnnouncement;