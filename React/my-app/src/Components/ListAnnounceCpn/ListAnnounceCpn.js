import React, { useState, useEffect } from "react";
import searchImg from "../img/search.png";
import { Scrollbars } from "react-custom-scrollbars";
import "./ListAnnouncement.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../actions/userActions";
import axios from "axios";

function ListAnnounceCpn({ history, Addition_Part }) {
    /* _____________Current User_____________ */
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userProfile);
    const { userDetail } = userProfile;
    useEffect(() => {
        if (!userDetail) {
            dispatch(getUserProfile("profile"));
        }
    }, [dispatch, history, userDetail]);

    const [conversations, setConversations] = useState([]);
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/api/conversations/" + (userDetail && userDetail._id));
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [userDetail && userDetail._id]);
    /* _____________________________________________ */

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
                                <button className="Announcpn" id={conversation.stt} onClick={parentClick}>
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
                        <div id={conversation.stt} className={click == conversation.stt ? "choose active" : "choose"}>
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
