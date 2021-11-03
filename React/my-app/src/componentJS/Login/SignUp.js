import './CSS/Signup.css'

function Signup() {

    return (
        <div class="page">
            <div class="container">
                <div class="left"></div>
                <div class="right">
                    <div id="welcome">Create account</div>

                    <div>
                        <div class="form">
                            <div class="inp">
                                <span>Username</span>
                                <input class="impBx" type="text"></input>
                            </div>
                            <div class="inp">
                                <span>Password</span>
                                <input class="impBx" type="text"></input>
                            </div>
                            <div class="inp">
                                <span>Retype Password</span>
                                        <input class="impBx" type="text"></input>
                            </div>
                            <div class="remember">
                                <label id="checkbox"> <input type="checkbox"></input> Agree with policy</label>
                                <a href="#">Privacy Policy</a>
                            </div>
                            <div class="btn-box">
                                <button type="button" class="toggle-btn1">Sign up</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Signup;