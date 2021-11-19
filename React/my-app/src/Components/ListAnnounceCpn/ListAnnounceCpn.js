import React, { useState, useEffect } from "react";
import searchImg from "../img/search.png";
import { Scrollbars } from "react-custom-scrollbars";
import "./ListAnnouncement.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../actions/userActions";
import { listconversationsSender, listconversationsRcv } from "../../actions/conversationActions";
import axios from "axios";

function ListAnnounceCpn({ history, Addition_Part }) {
    const conversations = [];

    const [click, setClick] = useState(1);

    function parentClick(e) {
        if (click !== 0) {
            click === e.target.id ? setClick(0) : setClick(e.target.id);
        } else {
            setClick(e.target.id);
        }
    }

    function handleClick(e) {
        e.stopPropagation();
        if (click !== 0) {
            click === e.target.parentElement.id ? setClick(0) : setClick(e.target.parentElement.id);
        } else {
            setClick(e.target.parentElement.id);
        }
    }

    return (
        <div id="Announ-wholeblock">
            {Addition_Part}
            <div id="listAnnoun">
                <div id="searchAnnoun">
                    <input id="inputAnnoun" type="text" name="Name:" placeholder="Search ..."></input>
                    <img src={searchImg} alt="SearchIconImage" id="searchAnnounIcon" />
                </div>

                <div id="sublistAnnoun">
                    <Scrollbars>
                        {conversations.map((conversation) => {
                            return (
                                <button className="Announcpn" id={conversation._id} onClick={parentClick}>
                                    <p className="receiver" onClick={handleClick}>
                                        To: {conversation.receiver}
                                    </p>
                                    <p className="subject" onClick={handleClick}>
                                        Subject: {conversation.subject}
                                    </p>
                                    <p className="content" onClick={handleClick}>
                                        {conversation.content}
                                    </p>
                                    <p className="time" onClick={handleClick}>
                                        {conversation.time}
                                    </p>
                                </button>
                            );
                        })}
                    </Scrollbars>
                </div>
            </div>

            <div id="content-block">
                {conversations.map((conversation) => {
                    return (
                        <div id={conversation._id} className={click == conversation._id ? "choose active" : "choose"}>
                            <div id="sender-receiver">
                                <p>From: {conversation.sender}</p>
                                <p>To: {conversation.receiver}</p>
                            </div>
                            <div id="inside-content-block">
                                <p id="subject-inside">{conversation.subject}</p>
                                <p id="content-inside">{conversation.content}</p>
                                <p id="time-inside">{conversation.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListAnnounceCpn;
