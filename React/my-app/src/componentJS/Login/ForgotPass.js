import './CSS/ForgotPass.css'
import { Link } from "react-router-dom"

function ForgotPass() {
    return (
        <div class="ForgotPasspage">
            <div class="ForgotPasscontainer">
                <div id="ForgotPassheader">
                    <div id="ForgotPasstxt1" class="ForgotPasstxt">Forgot your password?</div>
                <div id="ForgotPasstxt2" class="ForgotPasstxt">We’ll email you to help you reset it</div>
                </div>
                

                <input class="ForgotPassimpBx" type="text"></input>
                <div class="ForgotPassbtn-box">
                    <Link to='/login'>
                        <button type="button" class="ForgotPasstoggle-btn1">Reset</button>
                        <button type="button" class="ForgotPasstoggle-btn2">Cancel</button>
                    </Link>

                </div>  
            </div>
        </div>
        )
    }
    
    export default ForgotPass;