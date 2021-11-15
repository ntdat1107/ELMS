import './CSS/Login.css'
import {Link } from "react-router-dom"
import { typeUser } from './PreLogin'



function Login() {
    function handleUserType(Utype) {
        if (Utype === 0) {
            return "admin";
        } else if (Utype === 1) {
            return "ins";
        } else {
            return "learner";
        }
    }
    let type=handleUserType(typeUser)
    return (
        <div className="Loginpage">
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <div id="cancelContainer">
                            <button id="cancelButton">
                                <Link id="X" to='/'>
                                    X
                                </Link>
                            </button> 
                    </div>
                    <div id="welcome">Welcome back!</div>
                    
                    <div >                    
                        <form className="form">
                            <div className = "inp">
                                <span>Username</span>
                                <input className = "impBx" type="text" required></input>
                            </div>                       
                            <div className = "inp">
                                <span>Password</span>
                                <input className = "impBx" type="password" required></input>
                            </div> 
                            <div className="remember">
                                <label id = "checkbox"> <input type="checkbox"></input> Remember me</label>
                                <Link to='/forgotpass'>
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="btn-box">
                                <Link to={'/'+type+'/dashboard'}>
                                    <button type="submit" className="toggle-btn1">Log in</button>
                                </Link>
                                <Link to='/signup'>
                                    <button type="submit" className="toggle-btn2">Sign up</button>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Login;