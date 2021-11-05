import React, {useState} from 'react'
import bell from ".././img/bell.png";
import { Scrollbars } from 'react-custom-scrollbars';
const bellNotis = [
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
    {"content": "You have submitted your large assignment for Assignment #1. You can view the status of your major assignment submissions."},
]
const contentNoti = bellNotis.map((noti, index) => {
    return (
        <p>{(index+1) + ". "+ noti.content}</p>
    )
})
function BellNoti() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    return (        
        <div className="bell-btn">            
            <div id="bellBtn" onClick={handleClick}>
                <img src={bell} alt="BellImage" className="bellImg" id={click? "BellClose" : "BellOpen"}/>
                <div className = {bellNotis.length === 0 ? "NoNoti" : "HasNoti"}>
                    <p id = "numOfNoti"></p>
                </div>
            </div>            
            <ul className={click? 'nav-menu-noti active' : 'nav-menu-noti'}>
                <li className="nav-item-noti">
                    <p id = "titleNoti">Notifications</p>
                    <div id="listContentNoti">
                        <Scrollbars>
                                {contentNoti}
                        </Scrollbars>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export default BellNoti;
