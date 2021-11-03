import React from 'react'
import { NavLink } from "react-router-dom"
import './CSS/AdminAnnouncement.css'

function AnnounComponent( {
    cname,
    receiver,
    subject,
    content,
    time,
    senderimg,
    receiverimg,
    linkName,
    func,
    callback = () => {},
})  {
    return (
    <li classname={cname}> 
        <NavLink activeClassName="ActiveAnnoun" className="AnnounLink" to={linkName}>
        <button className="Announcpn" onClick={func}>
            <p id="receiver">To: {receiver}</p>
            <p id="subject">Subject: {subject}</p>
            <p id="content">{content}</p>
            <p id="time">{time}</p>
        </button> </NavLink>
    </li>
    )
}

export default AnnounComponent;
