import './CSS/ForgotPass.css'
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { resetPass } from '../../actions/userActions'
import ErrorToast from './../ErrorToast/ErrorToast'

function ForgotPass() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const resetPass = useSelector(state => state.resetPass)
    const {loading, error, success, passwordNow} = resetPass //passwordNow is password after reset
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            
        }
        else {
            dispatch(resetPass({userName, email, password}))
        }
    }

    return (
        <div className="ForgotPasspage">
            <form className="ForgotPasscontainer" onSubmit={handleSubmit}>
                <div id="ForgotPassheader">
                    <div id="ForgotPasstxt1">Forgot your password?</div>
                    <div id="ForgotPasstxt2">We’ll give your password</div>
                </div>
                
                <form>
                <input className="ForgotPassimpBx" type="text" required placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)}/>
                <input className="ForgotPassimpBx" type="email" placeholder="Email"
                required onChange={(e) => setEmail(e.target.value)}></input>
                <input className="ForgotPassimpBx" type="password" placeholder="New password"
                required onChange={(e) => setPassword(e.target.value)}></input>
                <input className="ForgotPassimpBx" type="password" placeholder="Confirm new password"
                required onChange={(e) => setConfirmPassword(e.target.value)}></input>
                </form>
                <div className="ForgotPassbtn-box">
                    <button type="submit" className="ForgotPasstoggle-btn1" 
                    onClick={(e) => handleSubmit(e)}>Reset</button>
                    <Link to='/login'>
                        <button type="button" className="ForgotPasstoggle-btn2">Cancel</button>
                    </Link>
                </div>  
            </form>
        </div>
        )
    }
    
    export default ForgotPass;