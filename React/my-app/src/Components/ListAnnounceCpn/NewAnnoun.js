import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import newannounbutton from "../Admin/image/NewAnnoun.png";
import "./NewAnnouncement.css";
import send from "../Admin/image/Send-button.png";
import { createNewCvs } from "../../actions/conversationActions";
import { getMyCourses } from "../../actions/myCoursesAction";

function NewAnnoun({ typeUserTemp }) {
    const dispatch = useDispatch();
    const createCvs = useSelector((state) => state.createCvs);
    const { CvsInfo } = createCvs;

    const myCourses = useSelector((state) => state.myCourses);
    const { loading, error, myCoursesList } = myCourses;

    useEffect(() => {
        dispatch(getMyCourses());
    }, [dispatch]);

    useEffect(() => {}, [CvsInfo]);

    const [click, setClick] = useState(false);
    const OpenNewAnnoun = () => setClick(true);
    const CloseNewAnnounBox = () => setClick(false);

    const SendAnnoun = () => {
        setClick(false);
        var subject = document.getElementById("subject").value;
        var content = document.getElementById("content").value;

        if (typeUserTemp == 0) {
            var check = document.getElementById("tick-box");
            if (check[0].checked) dispatch(createNewCvs(subject, content, "toInstructors"));
            if (check[1].checked) dispatch(createNewCvs(subject, content, "toLearners"));
        }
        if (typeUserTemp == 1) {
            var coursefastname = document.getElementById("coursefastname").value;

            if (coursefastname) dispatch(createNewCvs(subject, content, coursefastname));
        }
    };

    var displaychoose;

    if (myCoursesList && myCoursesList.length > 0) {
        displaychoose = myCoursesList.map((data, index) => {
            return <option value={data.fastName}>{data.fastName}</option>;
        });
    }

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
                                    <select id="coursefastname">{displaychoose}</select>
                                </div>
                            </div>
                        )}
                    </form>

                    <input type="text" id="subject" placeholder="Subject" />
                    <textarea className="text-editor" id="content" placeholder="Content"></textarea>

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
