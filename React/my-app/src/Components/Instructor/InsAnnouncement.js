import React, {useEffect} from "react";
import Header from '../Header/header'
import cheems from "../img/cheems.png"
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
        if (!userInfo) history.push('/login')
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo])
    return (
        <div id="ins-announce-ui">
            <SideBar typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information" typeUserTemp={1}/>
            <div id="ins-announce">
                <ListAnnounceCpn Addition_Part={<NewAnnoun typeUserTemp={1}/>} FakeData={AnnounData} />
            </div>
        </div>
    )
}

export default InsAnnouncement;