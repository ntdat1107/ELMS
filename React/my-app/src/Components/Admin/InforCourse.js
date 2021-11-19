import React from "react";
import minus from "./image/Iconminus.png";
import instructor from "../img/manageInsHover.png";
import learner from "../img/manageLnHover.png";
import "./CSS/AdminCourse.css";

const InforCourse = ({ Author, Learners }) => {
    return (
        <div>
            <div className="user-in-course">
                <div id="green">
                    <img src={instructor} alt="Instructor Icon" width="30px" height="30px" /> <p> Instructor</p>
                </div>
                <div id="name">
                    <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                    <p id="name-of">{Author}</p>
                </div>
            </div>

            {/* Danh Sach Hoc Vien */}

            <div className="user-in-course" id="b">
                <div id="green">
                    <img src={learner} alt="Learner Icon" width="30px" height="30px" />
                    <span> Learner</span>
                </div>
                {Learners.map((leaner) => {
                    return (
                        <div>
                            {/* <img id="right-icon" src={minus} alt="Minus Instructor Icon" width="30px" height="30px" />
                                <p id="name-of">{`${learnerlist.firstname} ${learnerlist.lastname}`}</p> */}

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
                    );
                })}
            </div>
        </div>
    );
};

export default InforCourse;
