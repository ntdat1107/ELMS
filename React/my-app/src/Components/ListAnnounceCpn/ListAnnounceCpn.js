import React, { useState } from "react";
import searchImg from "../img/search.png";
import { Scrollbars } from "react-custom-scrollbars";
import "./ListAnnouncement.css";

function ListAnnounceCpn({ Addition_Part, FakeData }) {
    const users = FakeData.slice(0, 50);
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
                        {users.map((user) => {
                            return (
                                <button className="Announcpn" id={user.stt} onClick={parentClick}>
                                    <p className="receiver" onClick={handleClick}>
                                        To: {user.receiver}
                                    </p>
                                    <p className="subject" onClick={handleClick}>
                                        Subject: {user.subject}
                                    </p>
                                    <p className="content" onClick={handleClick}>
                                        {user.content}
                                    </p>
                                    <p className="time" onClick={handleClick}>
                                        {user.time}
                                    </p>
                                </button>
                            );
                        })}
                    </Scrollbars>
                </div>
            </div>

            <div id="content-block">
                {users.map((user) => {
                    return (
                        <div id={user.stt} className={click == user.stt ? "choose active" : "choose"}>
                            <div id="sender-receiver">
                                <p>From: {user.sender}</p>
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
    );
}

export default ListAnnounceCpn;
