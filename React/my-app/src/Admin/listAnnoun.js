import React, { useState } from 'react'
import JsonData2 from "./FakedataforAnnoun.json"
import './CSS/AdminAnnouncement.css'
import SearchAnnoun from "./SearchAnnoun"
import { Scrollbars } from "react-custom-scrollbars"

function ListAnnoun() {
    const users = JsonData2.slice(0, 50);
    const [click, setClick] = useState(1)

    function parentClick(e) {        
        if (click !== 0) {
            (click === e.target.id)?  setClick(0) : setClick(e.target.id)
        }               
        else {
            setClick(e.target.id);
        }
    }

    function handleClick(e) {   
        e.stopPropagation();
        if (click !== 0) {              
            (click === e.target.parentElement.id)?  setClick(0) : setClick(e.target.parentElement.id)
        }               
        else {
            setClick(e.target.parentElement.id)
            }
    }
    console.log(click);

    return (
         
            <div id="wholeblock">
                <div id="listAnnoun">
                    <div id="SearchList">
                        <SearchAnnoun/>
                    </div>
                
                    <div id="sublistAnnoun">
                    <Scrollbars style={{ width: "100%", height: 455 }}>
                    {users.map((user) => {            
                    return (  
                        <button className="Announcpn" id={user.stt} onClick={parentClick}>
                            <p className="receiver" onClick={handleClick}>To: {user.receiver}</p>
                            <p className="subject" onClick={handleClick}>Subject: {user.subject} </p>
                            <p className="content" onClick={handleClick}>{user.content}</p>
                            <p className="time" onClick={handleClick}>{user.time}</p>
                        </button>                               
                    );
                    })}
                    </Scrollbars>
                    </div>
                    
                </div>

                <div id="content-block">
                {users.map((user) => {            
                return (
                    <div id={user.id} className={(click === user.stt)? "choose active" : "choose"}>
                        <div id="sender-receiver">
                            <p>From: MAI DUC LONG</p>
                            <p>To: {user.receiver}</p>                        
                        </div>
                        <div id="inside-content-block">
                            <p id="subject-inside">{user.subject}</p>
                            <p id="content-inside">{user.content}</p>
                            <p id="time-inside">{user.time}</p>
                        </div>   
                    </div>
                    );
                })}
                </div>
                               
            </div>  
        
    )
}

export default ListAnnoun;
