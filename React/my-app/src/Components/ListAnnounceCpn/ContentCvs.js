import React from "react";

function ContentCvs({ conversation, click, classN }) {
    var date = conversation.createdAt.split("T");

    var time = date[1].split(".") + 7;

    var h_and_m = time.split(":");

    var AM_or_PM = "";
    Number(h_and_m[0] <= 4) ? (AM_or_PM = "AM") : (AM_or_PM = "PM");

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
                    <p id="time-inside">{`${Number(h_and_m[0]) + 7}:${h_and_m[1]} ${AM_or_PM}, ${
                        date[0]
                    }`}</p>
                </div>
            </div>
        </>
    );
}

export default ContentCvs;
