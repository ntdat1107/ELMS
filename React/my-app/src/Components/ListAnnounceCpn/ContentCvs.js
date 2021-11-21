import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailByID } from "../../actions/userActions";

function ContentCvs({ cvsList, click, classN }) {
    const dispatch = useDispatch();

    const userDetailByID = useSelector((state) => state.userDetailByID);
    const { loading, error, userInfoByID } = userDetailByID;
    useEffect(() => {}, [userInfoByID]);

    return (
        <div id="content-block" className={classN}>
            {cvsList &&
                cvsList.map((conversation) => {
                    var time = conversation.createdAt.split("T");

                    return (
                        <div
                            id={conversation._id}
                            className={click == conversation._id ? "choose active" : "choose"}
                        >
                            <div id="sender-receiver">
                                <p>{`From: ${conversation.sender.firstname} ${conversation.sender.lastname}`}</p>
                                <p>To: {conversation.receiverName}</p>
                            </div>
                            <div id="inside-content-block">
                                <p id="subject-inside">{conversation.subject}</p>
                                <p id="content-inside">{conversation.content}</p>
                                <p id="time-inside">{time[0]}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default ContentCvs;
