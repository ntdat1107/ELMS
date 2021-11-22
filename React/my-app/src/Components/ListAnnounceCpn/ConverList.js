import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

function ConverList({ cvsList, parentClick, handleClick, classN, header }) {
    return (
        <div id="sublistAnnoun" className={classN}>
            <p id="headerAnnoun">{header}</p>
            <Scrollbars id="reserve" width="100%">
                {cvsList &&
                    cvsList.map((conversation) => {
                        var time = conversation.createdAt.split("T");
                        return (
                            <button
                                className="Announcpn"
                                id={conversation._id}
                                onClick={parentClick}
                            >
                                <p className="receiver" onClick={handleClick}>
                                    To: {conversation.receiverName}
                                </p>
                                <p className="subject" onClick={handleClick}>
                                    Subject: {conversation.subject}
                                </p>
                                <p className="content" onClick={handleClick}>
                                    {conversation.content}
                                </p>
                                <p className="time" onClick={handleClick}>
                                    {time[0]}
                                </p>
                            </button>
                        );
                    })}
            </Scrollbars>
        </div>
    );
}

export default ConverList;
