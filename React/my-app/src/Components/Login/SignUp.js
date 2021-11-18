import './CSS/Signup.css'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions';

function Signup({history}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [accountID, setAccountID] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isIns, setIns] = useState(true)
    const [isLearner, setLearner] = useState(false)

    const handleIns = () => {
        setIns(true)
        setLearner(false)
    }

    const handleLearner = () => {
        setIns(false)
        setLearner(true)
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

    const userRegister = useSelector(state => state.userRegister)

    const { userRegInfo } = userRegister

    useEffect(() => {
        if (userRegInfo) {
            history.push('/')
        }
    }, [history, userRegInfo, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            //Handle this!
        } else {
            dispatch(register( firstName, lastName, email, 
                accountID, password, isLearner, isIns ))
        }
    }
    return (
        <div className="Signuppage">
            <div className="Signupcontainer">
                <div className="Signupleft"></div>
                <div className="Signupright">
                    <div id="cancelContainer">
                            <button id="cancelButton">
                                <Link id="X" to='/'>
                                    X
                                </Link>
                            </button> 
                    </div>
                    <h3 id="Signupwelcome">Create account</h3>

                    <form className="Signupform">

                        <div id = "name">
                            <input className="Signupinp" id="nameinp1" type="text" 
                                placeholder="First name" required 
                                onChange={(e) => setFirstName(e.target.value)}></input>

                            <input className="Signupinp" id="nameinp2" type="text" 
                                placeholder="Last name" required 
                                onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        
                        <input className="Signupinp" type="email" 
                            placeholder="Email" required 
                            onChange={(e) => setEmail(e.target.value)}></input>

                        <input className="Signupinp" type="text" 
                            placeholder="User name" required 
                            onChange={(e) => setAccountID(e.target.value)}></input>

                        <input className="Signupinp" type="password" 
                            placeholder="Password" required 
                            onChange={(e) => setPassword(e.target.value)}></input>

                        <input className="Signupinp" type="password" 
                            placeholder="Retype Password" required 
                            onChange={(e) => setConfirmPassword(e.target.value)}></input>

                    <div className="label-group">
                        <label for ="isInstructor" id = "Typecheckbox" >Instructor
                        <input type="radio" id = "isInstructor" name="Type account" checked
                            onClick={handleIns}></input>
                        </label>

                        <label for ="isLearner" id = "Typecheckbox">Learner
                        <input type="radio" id = "isLearner" name="Type account"
                            onClick={handleLearner}></input>
                        </label>
                    </div>

                    <div className="Signupremember">
                        <label id="Signupcheckbox"> <input type="checkbox"></input> Agree with policy</label>
                        <Link to='/policy'>
                            Privacy Policy
                        </Link>
                    </div>
                    <button type="submit" className="Signuptoggle-btn1" onClick={submitHandler}>Sign up</button>
                    <label id="direct-to-login-label" for="direct-to-login">Have an Account?</label>
                    <Link to='/login'>
                        <button type="submit" id="direct-to-login">Login</button>
                    </Link>
                </form>

            </div>
        </div>
    </div>
    )
}
    
    export default Signup;