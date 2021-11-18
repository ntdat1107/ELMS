import './CSS/ForgotPass.css'
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';

function ForgotPass() {
    const [email, setEmail] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className="ForgotPasspage">
            <form className="ForgotPasscontainer" onSubmit={handleSubmit}>
                <div id="ForgotPassheader">
                    <div id="ForgotPasstxt1">Forgot your password?</div>
                    <div id="ForgotPasstxt2">We’ll email you to help you reset it</div>
                </div>
                

                <input className="ForgotPassimpBx" type="email" required onChange={(e) => setEmail(e.target.value)}></input>
                <div className="ForgotPassbtn-box">
                    <button type="submit" className="ForgotPasstoggle-btn1">Reset</button>
                    <Link to='/login'>
                        <button type="button" className="ForgotPasstoggle-btn2">Cancel</button>
                    </Link>

                </div>  
            </form>
        </div>
        )
    }
    
    export default ForgotPass;