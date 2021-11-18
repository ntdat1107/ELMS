import React, { useState } from "react";
import task from "./image/Task.png";
import "./CSS/AdminCourse.css";
import CourseForYouCpn from "../courseForYou/courseForYouCpn";
import change from "./image/changeIcon.png";
import minus from "./image/Iconminus.png";
import plus from "./image/Iconplus.png";
import infor from "./image/Inforicon.png";
import deletecourse from "./image/deletecourse.png";
import instructor from "../img/manageInsHover.png";
import learner from "../img/manageLnHover.png";
import { Scrollbars } from "react-custom-scrollbars";

function CourseCpninad({ id, imgSrcCourse, altCourse, Name, Desc, Author, Type, rateScore, imgStar, totalRate, tagColor, callback = () => {} }) {


    

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
                        altCourse={altCourse}
                        Name={Name}
                        Desc={Desc}
                        Author={Author}
                        Type={Type}
                        rateScore={rateScore}
                        imgStar={imgStar}
                        totalRate={totalRate}
                        tagColor={tagColor}
                        linkName='/'
                    />
                    <div id="ScrollBars">
                        <Scrollbars style={{ width: 1000, height: "42vh" }}>
                            <div id="below">
                                <div className="user-in-course">
                                    <div id="green">
                                        <img src={instructor} alt="Instructor Icon" width="30px" height="30px" /> <p> Instructor</p>
                                    </div>
                                    <div id="name">
                                        <img id="right-icon" src={change} alt="Change Instructor Icon" width="30px" height="30px" />
                                        <p id="name-of">{Author}</p>
                                    </div>
                                </div>

                                {/* Danh Sach Hoc Vien */}
                                <div className="user-in-course" id="b">
                                    <div id="green">
                                        <img src={learner} alt="Learner Icon" width="30px" height="30px" />
                                        <span> Learner</span>
                                        <img id="plus-icon" src={plus} alt="Plus Icon" width="30px" height="30px" />
                                    </div>
                                    <div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Duong Lam</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Dat Ngo</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Duy Hoang</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Dat Nguyen</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Long Mai</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Duong Lam</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Dat Ngo</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Duy Hoang</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Dat Nguyen</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Long Mai</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Duy Hoang</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Dat Nguyen</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Long Mai</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Duong Lam</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Dat Ngo</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Duy Hoang</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Dat Nguyen</p>
                                        </div>
                                        <div id="name">
                                            <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                            <p id="name-of">Long Mai</p>
                                        </div>
                                    </div>
                                </div>
                                {/*_____________________________________________________________*/}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>

            <div className={click3 ? "delete-box open" : "delete-box"}>
                <p id="close" onClick={closeBox}></p>
            </div>

            <CourseForYouCpn
                imgSrcCourse={imgSrcCourse}
                altCourse={altCourse}
                Name={Name}
                Desc={Desc}
                Author={Author}
                Type={Type}
                rateScore={rateScore}
                imgStar={imgStar}
                totalRate={totalRate}
                tagColor={tagColor}
            />
        </div>
    );
}

export default CourseCpninad;
