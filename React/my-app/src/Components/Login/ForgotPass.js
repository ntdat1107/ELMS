import './CSS/ForgotPass.css'
import { Link } from "react-router-dom"

function ForgotPass() {
    return (
        <div className="ForgotPasspage">
            <div className="ForgotPasscontainer">
                <div id="ForgotPassheader">
                    <div id="ForgotPasstxt1" className="ForgotPasstxt">Forgot your password?</div>
                <div id="ForgotPasstxt2" className="ForgotPasstxt">We’ll email you to help you reset it</div>
                </div>
                

                <input className="ForgotPassimpBx" type="email" required></input>
                <div className="ForgotPassbtn-box">
                    <Link to='/login'>
                        <button type="button" className="ForgotPasstoggle-btn1">Reset</button>
                        <button type="button" className="ForgotPasstoggle-btn2">Cancel</button>
                    </Link>

                </div>  
            </div>
        </div>
        )
    }
    
    export default ForgotPass;