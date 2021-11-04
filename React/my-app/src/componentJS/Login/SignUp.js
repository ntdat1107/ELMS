import './CSS/Signup.css'

function Signup() {

    return (
        <div class="Signuppage">
            <div class="Signupcontainer">
                <div class="Signupleft"></div>
                <div class="Signupright">
                    <div id="Signupwelcome">Create account</div>

                    <div>
                        <div class="Signupform">
                            <div class="Signupinp">
                                <span>Username</span>
                                <input class="SignupimpBx" type="text"></input>
                            </div>
                            <div class="Signupinp">
                                <span>Password</span>
                                <input class="SignupimpBx" type="password"></input>
                            </div>
                            <div class="Signupinp">
                                <span>Retype Password</span>
                                        <input class="SignupimpBx" type="password"></input>
                            </div>
                            <div class="Signupremember">
                                <label id="Signupcheckbox"> <input type="checkbox"></input> Agree with policy</label>
                                <a href="#">Privacy Policy</a>
                            </div>
                            <div class="Signupbtn-box">
                                <button type="button" class="Signuptoggle-btn1">Sign up</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Signup;