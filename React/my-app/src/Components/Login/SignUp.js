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
                    <h3 id="Signupwelcome">Create account</h3>

                    <form className="Signupform">

                        <div id = "name">
                            <input className="Signupinp" id="nameinp" type="text" placeholder="First name" required></input>
                            <input className="Signupinp" id="nameinp" type="text" placeholder="Last name" required></input>
                        </div>
                        
                        <input className="Signupinp" type="email" placeholder="Email" required></input>

                        <input className="Signupinp" type="text" placeholder="User name" required></input>

                        <input className="Signupinp" type="password" placeholder="Password" required></input>

                        <input className="Signupinp" type="password" placeholder="Retype Password" required></input>

                        <div className="label-group">
                            <label for ="isInstructor" id = "Typecheckbox" >Instructor
                            <input type="radio" id = "isInstructor" name="Type account" checked></input>
                            </label>

                            <label for ="isLearner" id = "Typecheckbox">Learner
                            <input type="radio" id = "isLearner" name="Type account"></input>
                            </label>
                        </div>

                        <div className="Signupremember">
                            <label id="Signupcheckbox"> <input type="checkbox"></input> Agree with policy</label>
                            <Link to='/policy'>
                                Privacy Policy
                            </Link>
                        </div>
                        
                        <Link to='/'>
                            <button type="submit" className="Signuptoggle-btn1">Sign up</button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
        )
    }
    
    export default Signup;