import React, { useState, useEffect } from "react";
import searchImg from "../img/search.png";
import { Scrollbars } from "react-custom-scrollbars";
import "./ListAnnouncement.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../actions/userActions";
import { getSendCvs, getReceiveCvs } from "../../actions/conversationActions";
import Loading from "../Loading/Loading";
import ConverList from "./ConverList";
import ContentCvs from "./ContentCvs";

function ListAnnounceCpn({ history, Addition_Part, typeUserTemp }) {
    const dispatch = useDispatch();
    /* _____________________________________ */
    const getCvsSend = useSelector((state) => state.getCvsSend);
    const { loading, error, cvsSendList } = getCvsSend;

    const getCvsReceive = useSelector((state) => state.getCvsReceive);
    const { loading: loading1, error: error1, cvsReceiveList } = getCvsReceive;

    useEffect(() => {
        if (!cvsSendList) dispatch(getSendCvs());
    }, [dispatch, history, cvsSendList]);

    useEffect(() => {
        if (!cvsReceiveList) dispatch(getReceiveCvs());
    }, [dispatch, history, cvsReceiveList]);

    /* ____________________________________________________________________ */
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
    /* ____________________________________________________________________ */

    const [receivebox, setReceivebox] = useState(1);
    const [sendbox, setSendbox] = useState(0);

    function openreceive() {
        setReceivebox(1);
        setSendbox(0);
    }

    function opensend() {
        setReceivebox(0);
        setSendbox(1);
    }

    /* ____________________________________________________________________ */

    if (loading || loading1) {
        return (
            <div>
                <Loading />
            </div>
        );
    } else if (error || error1) {
        return (
            <div id="err">
                <h1>ERROR</h1>
            </div>
        );
    } else
        return (
            <div id="Announ-wholeblock">
                {Addition_Part}
                <div id="listAnnoun">
                    {/* _________________For Instructors_________________ */}
                    {typeUserTemp == 1 && (
                        <>
                            <div id="pickRange">
                                <div id="receiveRange" onClick={openreceive}>
                                    Receive
                                </div>
                                <div id="sendRange" onClick={opensend}>
                                    Send
                                </div>
                            </div>

                            <ConverList
                                classN={receivebox ? "receive-box open" : "receive-box"}
                                cvsList={cvsReceiveList}
                                header="Receive"
                                parentClick={parentClick}
                                handleClick={handleClick}
                            />
                            <ConverList
                                classN={sendbox ? "send-box open" : "send-box"}
                                cvsList={cvsSendList}
                                header="Send"
                                parentClick={parentClick}
                                handleClick={handleClick}
                            />
                        </>
                    )}

                    {/* _________________For Learners_________________ */}
                    {typeUserTemp == 2 && (
                        <ConverList
                            classN={receivebox ? "receive-box open" : "receive-box"}
                            cvsList={cvsReceiveList}
                            header="Receive"
                            parentClick={parentClick}
                            handleClick={handleClick}
                        />
                    )}

                    {/* _________________For Admin_________________ */}
                    {typeUserTemp == 0 && (
                        <ConverList
                            classN={!sendbox ? "send-box open" : "send-box"}
                            cvsList={cvsSendList}
                            header="Send"
                            parentClick={parentClick}
                            handleClick={handleClick}
                        />
                    )}
                </div>

                {/* _________________________Content Box____________________________ */}
                {/* ________________Content box for Ins and Learner_________________ */}
                {typeUserTemp != 0 && (
                    <>
                        <ContentCvs
                            classN={receivebox ? "receive-box open" : "receive-box"}
                            cvsList={cvsReceiveList}
                            click={click}
                        />
                        <ContentCvs
                            classN={sendbox ? "send-box open" : "send-box"}
                            cvsList={cvsSendList}
                            click={click}
                        />
                    </>
                )}

                {/* ___________________Content box for Admin_________________ */}
                {typeUserTemp == 0 && (
                    <>
                        <ContentCvs
                            classN={!sendbox ? "send-box open" : "send-box"}
                            cvsList={cvsSendList}
                            click={click}
                        />
                    </>
                )}
            </div>
        );
}

export default ListAnnounceCpn;
