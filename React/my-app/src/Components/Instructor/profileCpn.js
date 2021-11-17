import React, { useState, useEffect } from 'react'
import camera from "./imgSrc/camera.png"
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, updateUserProfile } from '../../actions/userActions'

function ProfileCpn({
    history,
    srcImage,
    name,
}) {
    const [change, setChange] = useState(false)
    const handleChange = () => setChange(true)
    const saved = () => setChange(false)
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [city, setCity] = useState('')
    const [country, setCoutry] = useState('other')
    const [sex, setSex] = useState('other')
    const [avatar, setAvatar] = useState('')
    const [description, setDescription] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const dispatch = useDispatch()
    const userProfile = useSelector(state => state.userProfile)
    const {userDetail} = userProfile

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile
    useEffect(() => {
        if (!userDetail) {
             dispatch(getUserProfile('profile'))
        }
        else {
            setLastName(userDetail.lastName)
            setFirstName(userDetail.firstName)
            setEmail(userDetail.email)
            setBirthDay(userDetail.birthDay[10] == 'T' ? userDetail.birthDay.split('T')[0] : null)
            setAvatar(userDetail.avatar)
            setSex(userDetail.sex)
            setCoutry(userDetail.country)
            setCity(userDetail.city)
            setDescription(userDetail.description)
            setPhoneNumber(userDetail.phoneNumber)
        }
    }, [dispatch, history, userDetail])
    const saveHandle = (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            // Handle password do not match
        }
        else {
            dispatch(updateUserProfile({id: userDetail._id, firstName, lastName, email, avatar, city, country,
            description, sex, phoneNumber, birthDay, password}))
        }
    }
    const cancelHandle = (e) => {
        setLastName(userDetail.lastName)
        setFirstName(userDetail.firstName)
        setEmail(userDetail.email)
        setBirthDay(userDetail.birthDay)
        setAvatar(userDetail.avatar)
        setSex(userDetail.sex)
        setCoutry(userDetail.country)
        setCity(userDetail.city)
        setDescription(userDetail.description)
        setPhoneNumber(userDetail.phoneNumber)
    }

    return (
        <div id="MP">
            <div id="col1">
                <div className="avatarChange">
                    <img id="big-avt" src={srcImage} alt="Avatar" width="150px" height="auto" />
                    <div id="container">
                        <img id="change-avt" src={camera} alt="button" width="30px" height="30px"/>
                    </div>
                    <p id="nameUser">{name}</p>
                </div>
            </div>
            <div id="col2">    
                <div id="row-1">          
                    <div id="l-name">
                        <label className="label-pf" for="input-lastname" >Last Name</label>
                        <input className="input-tag-pf" type="text" id="input-lastname" name="lastname"
                        value={lastName}
                        onChange={(e) => {handleChange(); setLastName(e.target.value)}}/>
                    </div>
                    <div id="f-name">
                        <label className="label-pf" for="input-fname">First Name</label>
                        <input className="input-tag-pf" type="text" id="input-fname" name="firstname" 
                        value={firstName}
                        onChange={(e) => {handleChange(); setFirstName(e.target.value)}}/>
                    </div>
                    <div id="sex">
                        <label className="label-pf" for="sex">Sex</label>
                        <select className="input-tag-pf" id="input-sex" name="sex" 
                        value={sex}
                        onChange={ (e) => {handleChange(); setSex(e.target.value)}} >
                            <option value="Male" label="Male" />
                            <option value="Female" label="Female" />
                            <option value="other" label="Other" />
                        </select>
                    </div>
                </div>  
                <div id="row-2">
                    <div id="email">
                        <label className="label-pf" for="input-email">Email</label>
                        <input className="input-tag-pf" type="email"  id="input-email" name="email" 
                        value={email}
                        onChange={(e) => {handleChange(); setEmail(e.target.value)}} />
                    </div>
                    <div id="b-day" >
                        <label className="label-pf" for="input-birthday">Birthdate</label>
                        <input className="input-tag-pf" type="date" id="input-birthday" name="birthday" 
                        value={birthDay}
                        onChange={(e) => {handleChange(); setBirthDay(e.target.value)}} />  
                    </div>
                </div>
                <div id="row-3">
                    <div id="contact-number">
                        <label className="label-pf" for="input-number">Contact number</label>
                        <input className="input-tag-pf" type="tel"  id="input-number" 
                        value={phoneNumber}
                        onChange={(e) => {handleChange(); setPhoneNumber(e.target.value)}}/>
                    </div>
                </div>
                <div id="row-4">
                    <div id="city">
                        <label className="label-pf" for="input-city">City</label>
                        <input className="input-tag-pf" type="text"  id="input-city" 
                        value={city}
                        onChange={(e) => {handleChange(); setCity(e.target.value)}}/>
                    </div>
                    <div id="country">
                        <label className="label-pf" for="input-country">Country</label>
                        <select className="input-tag-pf" type="text"  id="input-country" 
                        value={country}
                        onChange={(e) => {handleChange(); setCoutry(e.target.value)}}>
                            <option value="Việt Nam" label="Việt Nam" />
                            <option value="England" label="England" />
                            <option value="Japan" label="Japan" />
                            <option value="American" label="American" />
                            <option value="Singapore" label="Singapore" />
                            <option label="India" label="India" />
                            <option value="other" label="Other" />
                        </select>
                    </div>
                </div>
                <div id="row-5">
                    <div id="description">
                        <label className="label-pf" for="input-des">Description</label>
                        <textarea className="input-tag-pf" type="text" id="input-des" 
                        value={description}
                        onChange={(e) => {handleChange(); setDescription(e.target.value)}}/>
                    </div>
                </div>
                <div id="row-6">
                    <button id="save-btn" className={change? "btn-save active" : "btn-save"} 
                    onClick={(e) => {saved(); saveHandle(e)}} >
                        Save
                    </button>
                    <button id="cancel-btn" className={change? "btn-save active" : "btn-save"} 
                    onClick={(e) => {saved(); cancelHandle(e)}} >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProfileCpn;