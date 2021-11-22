import { load } from "dotenv";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailByID } from "../../actions/userActions";

function ContentCvs({ conversation, click, classN }) {
    const dispatch = useDispatch();
    const userDetailByID = useSelector((state) => state.userDetailByID);
    const { loading, error, userInfoByID } = userDetailByID;
    useEffect(() => {
        dispatch(getUserDetailByID(conversation.sender));
    }, [dispatch]);

    var time = conversation.createdAt.split("T");

    if (loading) return <h1>Loading...</h1>;
    else if (error) return <h1>ERROR</h1>;
    else
        return (
            <>
                <div
                    id={conversation._id}
                    className={click == conversation._id ? "choose active" : "choose"}
                >
                    <div id="sender-receiver">
                        <p>{`From: ${userInfoByID && userInfoByID.firstName} ${
                            userInfoByID && userInfoByID.lastName
                        }`}</p>
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
