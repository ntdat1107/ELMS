import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

function ConverList({ cvsList, parentClick, handleClick, classN, header }) {
    const [click, setClick] = useState(1);

    return (
        <div id="sublistAnnoun" className={classN}>
            <p>{header}</p>
            <Scrollbars width="100%">
                {cvsList &&
                    cvsList.map((conversation) => {
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
                                    {conversation.time}
                                </p>
                            </button>
                        );
                    })}
            </Scrollbars>
        </div>
    );
}

export default ConverList;
