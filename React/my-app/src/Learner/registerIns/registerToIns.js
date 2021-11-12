import React from 'react'
import "./LnRegisterInsForm.css";
import { Link } from "react-router-dom"
import uploadCV from "./uploadCV.png"
function BoxRegisterIns() {
    return (        
        <div className="boxRegIns">
            <div className="Formcolumn">
                <div >
                    <div className="Formques">1. What kind of teaching have you done before?</div>
                        <div id = "FormSelection">
                            <div className="Formcontainer">
                                <input type="radio" id="op1" name="Question1" value="1"/>
                                <label for="op1">In person, informally</label><br/>
                            </div>
                            <div className="Formcontainer">
                                <input type="radio" id="op2" name="Question1" value="2"/>
                                <label for="op2">In person, professionally</label><br/>
                            </div>
                            <div className="Formcontainer">
                                <input type="radio" id="op3" name="Question1" value="3"/>
                                <label for="op3">Online</label><br/>
                            </div>
                            <div className="Formcontainer">
                                <input type="radio" id="op4" name="Question1" value="4"/>
                                <label for="op4">Other</label><br/>
                            </div>
                        </div>
                    </div>
                <div >
                    <div className="Formques" >2. How much of a video “pro” are you?</div>
                    <div id = "FormSelection">
                        <div className="Formcontainer">
                            <input type="radio" id="op1" name="Question2" value="1"/>
                            <label for="op1">I’m a beginner</label><br/>
                        </div>
                        <div className="Formcontainer">
                            <input type="radio" id="op2" name="Question2" value="2"/>
                            <label for="op2">I have some knowledge</label><br/>
                        </div>
                        <div className="Formcontainer">
                            <input type="radio" id="op3" name="Question2" value="3"/>
                            <label for="op3">I’m experienced</label><br/>
                        </div>
                        <div className="Formcontainer">
                            <input type="radio" id="op4" name="Question2" value="4"/>
                            <label for="op4">I have videos ready to up load</label><br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Formcolumn">
                <div >
                    <div className="Formques">3. Do you have an audience to share your course with?</div>
                    <div id = "FormSelection">
                        <div className="Formcontainer">
                            <input type="radio" id="op1" name="Question3" value="1"/>
                            <label for="op1">Not at the moment</label><br/>
                        </div>
                        <div className="Formcontainer">
                            <input type="radio" id="op2" name="Question3" value="2"/>
                            <label for="op2">I have a small following</label><br/>
                        </div>
                        <div className="Formcontainer">
                            <input type="radio" id="op3" name="Question3" value="3"/>
                            <label for="op3">I have a sizeable following</label><br/>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="FormquesBox">Attach a certificate image</div>
                    <div className="Formupload">
                        <p>Maximum file size: 100MB, maximum number of files: 3</p>
                        <div id="FormPushCV">
                            <img src={uploadCV} alt="Upload CV" style = {{paddingLeft: "45%"}} />
                            <p style = {{paddingLeft: "10%"}}>You can drag and drop files here to add them.</p>
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
                <Link to="/learner/dashboard" className="Link-coursename" ><p id="exitFormBtn">Exit</p></Link>
                <Link to="/learner/dashboard" className="Link-coursename" ><p id="submitFormBtn">Submit</p></Link>
            </div>
        </div>
    )
}

export default BoxRegisterIns;