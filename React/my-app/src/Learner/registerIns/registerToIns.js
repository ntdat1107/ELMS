import React, {useState} from 'react'
import "./LnRegisterInsForm.css";
import { Link } from "react-router-dom"

function BoxRegisterIns() {
    return (        
        <div className="boxRegIns">
            <div className="Formcolumn">
                <div >
                    <div className="Formques">What kind of teaching have you done before?</div>
                        <div id = "FormSelection">
                            <label className="Formcontainer">In person, informally
                                <input type="checkbox">
                                </input>
                                <span className="Formcheckmark"></span>
                            </label>
                            <label className="Formcontainer">In person, professionally
                                <input type="checkbox"></input>
                                <span className="Formcheckmark"></span>
                            </label>
                            <label className="Formcontainer">Online
                                <input type="checkbox"></input>
                                <span className="Formcheckmark"></span>
                            </label>
                            <label className="Formcontainer">Other
                                <input type="checkbox"></input>
                                <span className="Formcheckmark"></span>
                            </label>
                        </div>
                    </div>
                <div >
                    <div className="Formques" >How much of a video “pro” are you?</div>
                    <div id = "FormSelection">
                        <label className="Formcontainer">I’m a beginner
                            <input type="checkbox">
                            </input>
                            <span className="Formcheckmark"></span>
                        </label>
                        <label className="Formcontainer">I have some knowledge
                            <input type="checkbox"></input>
                            <span className="Formcheckmark"></span>
                        </label>
                        <label className="Formcontainer">I’m experienced
                            <input type="checkbox"></input>
                            <span className="Formcheckmark"></span>
                        </label>
                        <label className="Formcontainer">I have videos ready to up load
                            <input type="checkbox"></input>
                            <span className="Formcheckmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="Formcolumn">
                <div >
                    <div className="Formques">Do you have an audience to share your course with?</div>
                    <div id = "FormSelection">
                        <label className="Formcontainer">Not at the moment
                            <input type="checkbox">
                            </input>
                            <span className="Formcheckmark"></span>
                        </label>
                        <label className="Formcontainer">I have a small following
                            <input type="checkbox"></input>
                            <span className="Formcheckmark"></span>
                        </label>
                        <label className="Formcontainer">I have a sizeable following
                            <input type="checkbox"></input>
                            <span className="Formcheckmark"></span>
                        </label>
                    </div>
                </div>
                <div >
                    <div className="FormquesBox">Attach a certificate image</div>
                    <div className="Formupload">
                        <p>Maximum file size: 100MB, maximum number of files: 3</p>
                        <div id="FormPushCV">
                            <p>You can drag and drop files here to add them.</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="Formupload2">
                        <div className="Formupload2Container">
                            <div class ="Formupload2Confirm">
                                <input id = "checkBox" type="checkbox"></input>
                                <div id = "confirmTxt">
                                    I am committed to fulfilling my role in the organization.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="FormSignupbtn-box">
                <Link to="/learner/dashboard" ><p id="exitFormBtn">Exit</p></Link>
                <Link to="/learner/dashboard" ><p id="submitFormBtn">Submit</p></Link>
            </div>
        </div>
    )
}

export default BoxRegisterIns;