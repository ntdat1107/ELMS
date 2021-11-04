import React, { useState } from 'react'
import AnnounComponent from './AnnounComponent';
import JsonData2 from "./FakedataforAnnoun.json"
import './CSS/AdminAnnouncement.css'
import SearchBar from "../searchBar"
import searchImg from "./image/search.png"
import { Scrollbars } from "react-custom-scrollbars"


function ListAnnoun() {
    const users = JsonData2.slice(0, 50);
    const [click, setClick] = useState(0)

    var x = document.querySelector("#wholeblock");

    function parentClick(e) {        
        if (click != 0) {
            (click == e.target.id)?  setClick(0) : setClick(e.target.id)
        }               
        else {
            setClick(e.target.id);
        }
    }

    function handleClick(e) {   
        e.stopPropagation();
        if (click != 0) {              
            (click == e.target.parentElement.id)?  setClick(0) : setClick(e.target.parentElement.id)
        }               
        else {
            setClick(e.target.parentElement.id)
            }
    }
    console.log(click);

    return (
         
            <div id="wholeblock">
                <div id="SearchList">
                    <SearchBar searchImg={searchImg} name="SearchList" searchType="Search ..." />
                </div>

                {users.map((user) => {            
                return (    
                    <div id="listAnnoun">
                    <div id="sublistAnnoun">                                
                    <button className="Announcpn" id={user.stt} onClick={parentClick}>
                        <p className="receiver" onClick={handleClick}>To: {user.receiver}</p>
                        <p className="subject" onClick={handleClick}>Subject: {user.subject} </p>
                        <p className="content" onClick={handleClick}>{user.content}</p>
                        <p className="time" onClick={handleClick}>{user.time}</p>
                    </button>
                    </div>        
                        
                    <div id={user.id} className={(click == user.stt)? "choose active" : "choose"}>
                        <p>From: MAI DUC LONG</p>
                        <p>To: {user.receiver}</p>
                        <p>{user.receiver}</p>
                        <p>{user.subject}</p>
                        <p>{user.content}</p>
                        <p>{user.time}</p>
                    </div>
                </div>
                );
                })}
                
            </div>  
        
    )
}

export default ListAnnoun;
