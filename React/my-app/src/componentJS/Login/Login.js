import './CSS/Login.css'

function Login() {

    return (
        <div class="Loginpage">
            <div class="container">
                <div class="left"></div>
                <div class="right">
                    <div id="welcome">Welcome back!</div>
                    
                    <div >                    
                        <div class="form">
                            <div class = "inp">
                                <span>Username</span>
                                <input class = "impBx" type="text"></input>
                            </div>                       
                            <div class = "inp">
                                <span>Password</span>
                                <input class = "impBx" type="password"></input>
                            </div> 
                            <div class="remember">
                                <label id = "checkbox"> <input type="checkbox"></input> Remember me</label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <div class="btn-box">
                                <button type="button" class="toggle-btn1">Log in</button>
                                <button type="button" class="toggle-btn2">Sign up</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Login;