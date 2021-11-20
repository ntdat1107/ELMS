import React, { useState, useEffect } from "react";
import searchImg from "../img/search.png";
import { Scrollbars } from "react-custom-scrollbars";
import "./ListAnnouncement.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../actions/userActions";
import { getSendCvs, getReceiveCvs } from "../../actions/conversationActions";
import ConverList from "./ConverList";
import ContentCvs from "./ContentCvs";

function ListAnnounceCpn({ history, Addition_Part }) {
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

    if (loading || loading1) {
        return <h1>Loading</h1>;
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
                    <div id="searchAnnoun">
                        <input
                            id="inputAnnoun"
                            type="text"
                            name="Name:"
                            placeholder="Search ..."
                        ></input>
                        <img src={searchImg} alt="SearchIconImage" id="searchAnnounIcon" />
                    </div>

                    <ConverList
                        cvsList={cvsSendList}
                        parentClick={parentClick}
                        handleClick={handleClick}
                    />

                    <ConverList
                        cvsList={cvsReceiveList}
                        parentClick={parentClick}
                        handleClick={handleClick}
                    />
                </div>

                <ContentCvs cvsList={cvsSendList} click={click} />
                <ContentCvs cvsList={cvsReceiveList} click={click} />
            </div>
        );
}

export default ListAnnounceCpn;
