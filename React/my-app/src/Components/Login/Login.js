import React, { useState, useEffect } from 'react';
import './CSS/Login.css'
import {Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, login } from '../../actions/userActions.js'

function Login({history}) {
    const [accountID, setAccountID] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            dispatch(getUserProfile('profile'))
            if (userInfo.isLearner) history.push('/learner/dashboard')
            else if (userInfo.isIns) history.push('/ins/dashboard')
            else if (userInfo.isAdmin) history.push('/admin/dashboard')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(accountID, password))
    }

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
                        <form onSubmit={submitHandler} className="form">
                            <div className = "inp">
                                <span>Username</span>
                                <input className = "impBx" type="text" 
                                onChange={(e) => setAccountID(e.target.value)} 
                                required ></input>
                            </div>                       
                            <div className = "inp">
                                <span>Password</span>
                                <input className = "impBx" type="password" 
                                onChange={(e) => setPassword(e.target.value)}
                                required></input>
                            </div> 
                            <div className="remember">
                                <label id = "checkbox"> <input type="checkbox"></input> Remember me</label>
                                <Link to='/forgotpass'>
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="btn-box">
                                    <button type="submit" className="toggle-btn1">Log in</button>
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