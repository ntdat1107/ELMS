import React from "react";

function ContentCvs({ cvsList, click }) {
    return (
        <div id="content-block">
            {cvsList &&
                cvsList.map((conversation) => {
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
                                <p id="time-inside">{conversation.time}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default ContentCvs;
