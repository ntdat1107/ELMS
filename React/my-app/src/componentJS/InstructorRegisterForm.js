import "../componentCSS/InstructorRegisterForm.css"
import { Link } from "react-router-dom"

var temp = 0;
function InstructorRegister() {
    return (
        <div class="Formcolumns">
            <div class="Formcolumn">
                <div >
                    <h3 className="Formques">What kind of teaching have you done before?</h3>
                    <div id = "FormSelection">
                        <label class="Formcontainer">In person, informally
                            <input type="checkbox">
                            </input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">In person, professionally
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">Online
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">Other
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>
                    </div>
                </div>

                <div >
                    <h3 className="Formques">How much of a video “pro” are you?</h3>
                    <div id = "FormSelection">
                        <label class="Formcontainer">I’m a beginner
                            <input type="checkbox">
                            </input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">I have some knowledge
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">I’m experienced
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">I have videos ready to up load
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>
                    </div>
                </div>
                
            </div>
            <div class="Formcolumn">
                <div >
                    <h3 className="Formques">Do you have an audience to share your course with?</h3>
                    <div id = "FormSelection">
                        <label class="Formcontainer">Not at the moment
                            <input type="checkbox">
                            </input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">I have a small following
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>

                        <label class="Formcontainer">I have a sizeable following
                            <input type="checkbox"></input>
                            <span class="Formcheckmark"></span>
                        </label>

                    </div>
                </div>

                <div >
                    <h3 className="Formques">Attach a certificate image</h3>
                    <div className="Formupload">
                    </div>
                </div>

                <div >
                    <div className="Formupload2">
                        <div className="Formupload2Container">

                            <div class ="Formupload2Confirm">
                                <input type="checkbox"></input>
                                <div id = "confirmTxt">
                                    I am committed to fulfilling my role in the organization.
                                </div>
                            </div>

                            <div >
                                    <Link to='/learner/dashboard' className="linkReturn"><button type="button" class="FormSignupbtn-box">Exit</button></Link>
                                    <Link to='/learner/dashboard' className="linkReturn" onclick = {function() {temp = 1}}>
                                        <button type="button" class="FormSignupbtn-box" >
                                            Submit
                                        </button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {temp};
export default InstructorRegister;