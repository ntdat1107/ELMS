import React, { useState, useEffect } from 'react';
import './CSS/Login.css'
import {Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions.js'
import ErrorToast from './../ErrorToast/ErrorToast';

function Login({history}) {
    const [accountID, setAccountID] = useState('')
    const [password, setPassword] = useState('')
    const [list, setList] = useState([])

    const showToast = () => {
        setList([{
            id: list.length + 1,
            title: 'Error',
            description: 'Login Error! Please try again.',
            backgroundColor: '#5cb85c'
        }])
    }

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
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
                        <form className="form">
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
                                <Link to='/forgotpass'>
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="btn-box">
                                    <button type="submit" className="toggle-btn1" onClick={(e)=> {showToast(); submitHandler(e)}}>Log in</button>
                                <Link to='/signup'>
                                    <button type="button" className="toggle-btn2">Sign up</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                { error && <ErrorToast toastList={list} setList={setList}/> }
                
            </div>
        </div>
        )
    }
    
    export default Login;