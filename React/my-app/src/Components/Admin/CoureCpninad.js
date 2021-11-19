import React, { useState } from "react";
import task from "./image/Task.png";
import "./CSS/AdminCourse.css";
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import infor from "./image/Inforicon.png";
import deletecourse from "./image/deletecourse.png";
import { Scrollbars } from "react-custom-scrollbars";
import InforCourse from "./InforCourse";

function CourseCpninad({ id, imgSrcCourse, Name, Desc, Author, Learners, Type, rateScore, totalRate, tagColor, linkName, callback = () => {} }) {
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const handleClick = () => setClick(!click);

    function MenuDetail(e) {
        setClick(false);
        setClick2(true);
        setClick3(false);
    }

    function MenuDelete(e) {
        setClick(false);
        setClick3(true);
        setClick2(false);
    }

    const closeBox = () => {
        setClick2(false);
        setClick3(false);
    };

    return (
        <div id="add-taskIcon">
            <div className="task-button">
                <img onClick={handleClick} src={task} alt="Task Icon" className="taskIcon" id={click ? "taskOpen" : "taskClose"} />

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item" onClick={MenuDetail}>
                        <img src={infor} alt="InfoImg" width="18px" height="auto"></img>
                        <span> Detail</span>
                    </li>
                    <li className="nav-item" onClick={MenuDelete}>
                        <img src={deletecourse} alt="DeleteCourseImg" width="18px" height="auto"></img>
                        <span> Delete</span>
                    </li>
                </ul>
            </div>

            <div className={click2 ? "detail-box open" : "detail-box"}>
                <div className="modal-overlay"></div>
                <div className="modal-body">
                    <p id="close" onClick={closeBox}>
                        X
                    </p>
                    <CourseForYouCpn
                        imgSrcCourse={imgSrcCourse}
                        Name={Name}
                        Desc={Desc}
                        Author={Author}
                        Type={Type}
                        rateScore={rateScore}
                        totalRate={totalRate}
                        tagColor={tagColor}
                        linkName={linkName}
                    />
                    <div id="ScrollBars">
                        <Scrollbars style={{ width: 1000, height: "42vh" }}>
                            <div id="below">
                                <InforCourse Author={Author} Learners={Learners} />
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>

            <div className={click3 ? "delete-box open" : "delete-box"}>
                <p id="close" onClick={closeBox}></p>
            </div>

            <CourseForYouCpn imgSrcCourse={imgSrcCourse} Name={Name} Desc={Desc} Author={Author} Type={Type} rateScore={rateScore} totalRate={totalRate} tagColor={tagColor} linkName={linkName} />
        </div>
    );
}

export default CourseCpninad;
