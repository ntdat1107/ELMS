import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import newannounbutton from "../Admin/image/NewAnnoun.png";
import "./NewAnnouncement.css";
import send from "../Admin/image/Send-button.png";
import { createNewCvs } from "../../actions/conversationActions";

function NewAnnoun({ typeUserTemp }) {
    const dispatch = useDispatch();
    const createCvs = useSelector((state) => state.createCvs);
    const { loading, error, CvsInfo } = createCvs;

    useEffect(() => {}, [CvsInfo]);

    const [click, setClick] = useState(false);
    const OpenNewAnnoun = () => setClick(true);
    const CloseNewAnnounBox = () => setClick(false);

    var subject, content;
    var check = document.getElementsByName("tick-box");
    var instructors, learners;

    const SendAnnoun = () => {
        setClick(false);
        if (check[0].checked) instructors = "toInstructors";
        if (check[1].checked) learners = "toLearners";
        subject = document.getElementById("subject").value;
        content = document.getElementById("content").value;
        console.log(subject);

        if (check[0].checked) dispatch(createNewCvs(subject, content, "toInstructors"));
        if (check[1].checked) dispatch(createNewCvs(subject, content, "toLearners"));
    };

    return (
        <div className="new-announ">
            <img
                onClick={OpenNewAnnoun}
                id="newannounbutton"
                src={newannounbutton}
                alt="New AnnouncementImage"
                width="70"
                height="70"
            />

            <div id="New-Announ-Box" className={click ? "boxbox show-up" : "boxbox"}>
                <div className="new-announ-modal-overlay"></div>
                <div className="new-announ-modal-body">
                    <form id="tick-box">
                        {typeUserTemp != 1 && (
                            <div id="tick-box-top">
                                <div id="tick-box-top-inside">
                                    <input name="tick-box" type="checkbox" value="All Instructor" />{" "}
                                    All Instructors
                                </div>
                                <div id="tick-box-top-inside">
                                    <input name="tick-box" type="checkbox" value="All Learner" />{" "}
                                    All Learners
                                </div>
                            </div>
                        )}
                        {typeUserTemp == 1 && (
                            <div id="tick-box-top">
                                <div id="tick-box-top-inside">
                                    <input type="radio" value="All my learners" /> All my learners
                                </div>
                            </div>
                        )}
                    </form>
                    <input type="text" id="subject" />
                    <div className="text-editor">
                        <input type="text" id="content" />
                    </div>

                    <p id="close-button" onClick={CloseNewAnnounBox}>
                        Close
                    </p>
                    <img
                        id="send-button"
                        onClick={SendAnnoun}
                        src={send}
                        alt="SendIcon"
                        width="60px"
                        height="'60px"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewAnnoun;
