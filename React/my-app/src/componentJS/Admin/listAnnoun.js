import React, {useState} from 'react'
import AnnounComponent from './AnnounComponent';
import JsonData2 from "./FakedataforAnnoun.json"
import './CSS/AdminAnnouncement.css'
import SearchBar from "../searchBar"
import searchImg from "./image/search.png"
import { Scrollbars } from "react-custom-scrollbars"


function ListAnnoun() {
    const [users, setUsers] = useState(JsonData2.slice(0, 50));

    const [click, setClick] = useState(false)

    function handleClick(e) {
        e.stopPropagation();
        setClick(!click);
        }

    const displayUsers = users.map((user) => {
        return (
            <div className="metmoiqua">
                <ul className="sublistAnnoun">
                <div id="click-Announ">
                <button className="Announcpn" onClick={handleClick}>
                    <p id="receiver">To: {user.receiver}</p>
                    <p id="subject">Subject: {user.subject}
                    <span id="content">{user.content}</span>
                    </p>    
                    <p id="time">{user.time}</p>
                </button>
                </div>
                </ul>
                
                <div className={click? 'choose active' : 'choose'}>
                    <p>From: MAI DUC LONG</p>
                    <p>To: {user.receiver}</p>
                    <p>{user.receiver}</p>
                    <p>{user.subject}</p>
                    <p>{user.content}</p>
                    <p>{user.time}</p>
                </div>
            </div>
        );
      });

    return (
        <div id="listAnnoun">
            <div id="SearchList">
                <SearchBar searchImg={searchImg} name="SearchList" searchType="Search ..." />
            </div>
            <Scrollbars style={{ width: "100%", height: 600 }}>
                {displayUsers}
            </Scrollbars>    
        </div>
    )
}

export default ListAnnoun;
