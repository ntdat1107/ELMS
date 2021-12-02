import './CSS/Signup.css'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions';
import ErrorToast from '../ErrorToast/ErrorToast';

function Signup({history}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [accountID, setAccountID] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isIns, setIns] = useState(true)
    const [isLearner, setLearner] = useState(false)
    const [checkpri, setCheckpri] = useState(false)

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
    const { error, userInfo } = userLogin
    const [list, setList] = useState([])
    const [msgerror, setError] = useState(false)

    const showToast = () => {
        setList([{
            id: list.length + 1,
            title: 'Error',
            description: 'Signup Error! Please try again.',
            backgroundColor: '#5cb85c'
        }])
    }

    useEffect(() => {
        if (userInfo) {
            if (userInfo.isLearner) history.push('/learner/dashboard')
            else if (userInfo.isIns) history.push('/ins/dashboard')
            else if (userInfo.isAdmin) history.push('/admin/dashboard')
        }
    }, [history, userInfo])

    const userRegister = useSelector(state => state.userRegister)

    const { error: regError, userRegInfo } = userRegister
    useEffect(() => {
        console.log(regError)
    }, [regError])
    useEffect(() => {
        if (userRegInfo && firstName) {
            history.push('/login')
        }
    }, [history, userRegInfo, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        if (!(firstName && lastName && email && accountID &&  password && confirmPassword && checkpri) || (password != confirmPassword)) {
            //Handle this!
            setError(true)
            
        } else {
            setError(false)
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

                    <form className="Signupform" >

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
                        <label id="Signupcheckbox"> <input type="checkbox" 
                        onClick={(e) => setCheckpri(e.target.value)}></input> Agree with policy</label>
                        <Link to='/policy'>
                            Privacy Policy
                        </Link>
                    </div>
                    <button type="submit" className="Signuptoggle-btn1" onClick={(e)=> {showToast(); submitHandler(e)}}>Sign up</button>
                    <label id="direct-to-login-label" for="direct-to-login"></label>
                    <Link to='/login'>
                        <button type="submit" id="direct-to-login" className="Signuptoggle-btn1">Back to Login</button>
                    </Link>
                </form>

            </div>
        </div>
        { msgerror && <ErrorToast toastList={list} setList={setList}/> }
        { error && <ErrorToast toastList={list} setList={setList}/>}
    </div>
    )
}
    
    export default Signup;