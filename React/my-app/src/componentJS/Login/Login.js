import './CSS/Login.css'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

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
                                <Link to='/forgotpass'>
                                    <a>Forgot password?</a>
                                </Link>
                            </div>
                            <div class="btn-box">
                                <button type="button" class="toggle-btn1">Log in</button>
                                <Link to='/signup'>
                                    <button type="button" class="toggle-btn2">Sign up</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Login;