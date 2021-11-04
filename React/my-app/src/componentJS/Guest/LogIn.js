import React from "react";
import { Link } from "react-router-dom";
import './CSS/LogIn.css'

function LogIn() {

    return (
        <div id = "headerButton">
            <Link to="/login">
                <button id = "logInButton">
                    <p>Log In</p>
                </button>
            </Link>
            <Link to="/signup">
                <button id = "signUpButton">
                    <p>Sign Up</p>
                </button>
            </Link>
        </div>
    )
}

export default LogIn;