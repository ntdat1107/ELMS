import './CSS/Signup.css'
import { Link } from "react-router-dom"

function Signup() {

    return (
        <div className="Signuppage">
            <div className="Signupcontainer">
                <div className="Signupleft"></div>
                <div className="Signupright">
                    <div id="cancelContainer">
                            <button id="cancelButton">
                                <Link id="X" to='/'>
                                    X
                                </Link>
                            </button> 
                    </div>
                    <div id="Signupwelcome">Create account</div>

                    <div>
                        <div className="Signupform">
                            <div className="Signupinp">
                                <span>Username</span>
                                <input className="SignupimpBx" type="text"></input>
                            </div>
                            <div className="Signupinp">
                                <span>Password</span>
                                <input className="SignupimpBx" type="password"></input>
                            </div>
                            <div className="Signupinp">
                                <span>Retype Password</span>
                                        <input className="SignupimpBx" type="password"></input>
                            </div>
                            <div className="Signupremember">
                                <label id="Signupcheckbox"> <input type="checkbox"></input> Agree with policy</label>
                                <Link to='/policy'>
                                    Privacy Policy
                                </Link>
                            </div>
                            <Link to='/'>
                                <div className="Signupbtn-box">
                                    <button type="button" className="Signuptoggle-btn1">Sign up</button>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Signup;