import React from "react";

function ContentCvs({ conversation, click, classN }) {
    var time = conversation.createdAt.split("T");

    return (
        <>
            <div
                id={conversation._id}
                className={click == conversation._id ? "choose active" : "choose"}
            >
                <div id="sender-receiver">
                    <p>From: {conversation.senderName}</p>
                    <p>To: {conversation.receiverName}</p>
                </div>
                <div id="inside-content-block">
                    <p id="subject-inside">{conversation.subject}</p>
                    <p id="content-inside">{conversation.content}</p>
                    <p id="time-inside">{time[0]}</p>
                </div>
            </div>
        </>
    );
}

export default ContentCvs;
