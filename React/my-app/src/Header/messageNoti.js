import React, {useState} from 'react'
import message from "../img/message.png";
import SearchBar from "./searchBar";
import searchIcon from "../img/search.png";
import sendIcon from "../img/sendMessage.png";
import { Scrollbars } from 'react-custom-scrollbars';

const messageNotis = [
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
    {"content": "From Mr.Long:You have a short test that takes about 20 minutes in the Django course at 2.pm on 31/02/2020."},
]
const contentNoti = messageNotis.map((noti, index) => {
    return (
        <p key={index}>{(index+1) + ". "+ noti.content}</p>
    )
})
function MessageNoti() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    return (        
        <div className="message-btn">            
            <div id="messageBtn" onClick={handleClick}>
                <img src={message} style={{cursor: 'pointer'}} alt="MessageImage" className="messageImg" id={click? "MessageClose" : "MessageOpen"}/>
                <div className = {messageNotis.length === 0 ? "NoNoti" : "HasNoti"}>
                    <p id = "numOfNoti"></p>
                </div>
            </div>            
            <ul className={click? 'nav-menu-ms active' : 'nav-menu-ms'}>
                <li className="nav-item-ms">
                    <p id = "titleNoti-ms">Message</p>
                    <div id="listContentNoti-ms">
                        <Scrollbars>
                                {contentNoti}
                        </Scrollbars>
                    </div>
                </li>
            </ul>
            
        </div>
    )
}

export default MessageNoti;

