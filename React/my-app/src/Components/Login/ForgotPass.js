import './CSS/ForgotPass.css'
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { resetNewPass } from '../../actions/userActions'
import ErrorToast from './../ErrorToast/ErrorToast'
import Loading from './../Loading/Loading';

function ForgotPass() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [show, setShow] = useState(false)
    const [list, setList] = useState([{
        id: 1,
        title: 'Error',
        description: 'Confirm password incorrect!',
        backgroundColor: '#5cb85c'
    }])
    const resetAll = () => {
        setEmail('')
        setUsername('')
        setPassword('')
        setConfirmPassword('')
    }
    const showToast = () => {
        setList([{
            id: list.length + 1,
            title: 'Error',
            description: 'Please fill all information needed!',
            backgroundColor: '#5cb85c'
        }])
    }

    const resetPass = useSelector(state => state.resetPass)
    const {loading, error, success, passwordNow} = resetPass //passwordNow is password after reset
    //console.log(error + " ok")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!(email && userName && password && confirmPassword)) {
            setShow(true)
        } else
        if (password !== confirmPassword) {
            setShow(true)
        }
        else {
            dispatch(resetNewPass({userName, email, password}))
        }
    }
    if (loading) return (
        <Loading/>
    )   
    else if (error) return (
        
        <div className="ForgotPasspage">
            <form className="ForgotPasscontainer">
                <div id="ForgotPassheader">
                    <div id="ForgotPasstxt1">Forgot your password?</div>
                    <div id="ForgotPasstxt2"><strong>{error}</strong></div>
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
                    onClick={(e) => {setShow(false); showToast();handleSubmit(e); resetAll()}}>Reset</button>
                    <Link to='/login'>
                        <button type="button" className="ForgotPasstoggle-btn2">Go Back</button>
                    </Link>
                </div>  
            </form>
            {show && <ErrorToast toastList={list} setList={setList}/>}
        </div>
    )
    else if (success){
        return (
            <div className="ForgotPasspage">
                <form className="ForgotPasscontainer">
                    <div id="ForgotPassheader">
                        <div id="ForgotPasstxt1">Forgot your password?</div>
                        <div id="ForgotPasstxt2"><strong>Your password has been updated!</strong></div>
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
                        onClick={(e) => {setShow(false) ;showToast(); handleSubmit(e); resetAll()}}>Reset</button>
                        <Link to='/login'>
                            <button type="button" className="ForgotPasstoggle-btn2">Go Back</button>
                        </Link>
                    </div>  
                </form>
                {show && <ErrorToast toastList={list} setList={setList}/>}
            </div>
        )
    } 
    else
    return (
        <div className="ForgotPasspage">
            <form className="ForgotPasscontainer">
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
                    onClick={(e) => {setShow(false); showToast(); handleSubmit(e); resetAll()}}>Reset</button>
                    <Link to='/login'>
                        <button type="button" className="ForgotPasstoggle-btn2">Go Back</button>
                    </Link>
                </div>  
            </form>
            {show && <ErrorToast toastList={list} setList={setList}/>}
        </div>
        )
    }
    
    export default ForgotPass;