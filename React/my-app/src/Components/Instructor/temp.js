import React, { useState, useEffect } from 'react'
import camera from "./imgSrc/camera.png"
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, updateUserProfile } from '../../actions/userActions'
import Loading from '../Loading/Loading'
function ProfileCpn({
    history,
    name,
}) {
    const [change, setChange] = useState(false)
    const handleChange = () => setChange(true)
    const saved = () => setChange(false)
    
    const [uploading, setUploading] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [city, setCity] = useState('')
    const [country, setCoutry] = useState('other')
    const [sex, setSex] = useState('other')
    const [avatar, setAvatar] = useState("https://st.quantrimang.com/photos/image/072015/22/avatar.jpg")
    const [description, setDescription] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    function getCurrentDate(separator='-'){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }

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
            setBirthDay(userDetail.birthDay ? userDetail.birthDay.split('T')[0] : null)
            setAvatar(userDetail.avatar)
            setSex(userDetail.sex ? userDetail.sex : 'other')
            setCoutry(userDetail.country ? userDetail.country : 'other')
            setCity(userDetail.city ? userDetail.city : '')
            setDescription(userDetail.description ? userDetail.description : '')
            setPhoneNumber(userDetail.phoneNumber ? userDetail.phoneNumber : '')
        }
    }, [dispatch, history, userDetail])

    const saveHandle = (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            // Handle password do not match
            alert("Password don't match")
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
                    <img id="big-avt" src={avatar} alt="Avatar" height="150px" width="150px" />
                    <div id="container">
                        <label className="camera-btn">
                            {/* <input type={"file"} id="avatar" name="avatar" accept="image/png, image/jpeg, image/jpg"
                            onChange={(e) => {handleChange(); uploadFileHandle(e)}}></input>
                            {uploading && <Loading />} */}
                            <img id="change-avt" src={camera} alt="button" width="30px" height="30px"/>
                        </label>
                    </div>
                    <input type="text" id="avt-url" placeholder="Avatar url" onChange={(e) => {handleChange();setAvatar(e.target.value)}}/>
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
                        <input className="input-tag-pf" type="date" id="input-birthday" 
                        name="birthday" min="1920-01-01" max={getCurrentDate()}
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
                            <option value="Vi???t Nam" label="Vi???t Nam" />
                            <option value="England" label="England" />
                            <option value="Japan" label="Japan" />
                            <option value="American" label="American" />
                            <option value="Singapore" label="Singapore" />
                            <option label="India" label="India" />
                            <option value="other" label="Other" />
                        </select>
                    </div>
                </div>
                <div id="row-4">
                    <div id="description">
                        <label className="label-pf" for="input-des">Description</label>
                        <textarea className="input-tag-pf" type="text" id="input-des" 
                        value={description}
                        onChange={(e) => {handleChange(); setDescription(e.target.value)}}/>
                    </div>
                </div>
                <div id="row-5">
                    <div id="pass">
                        <label className="label-pf" htmlFor="newpass">Password</label>
                        <input type="password" className="input-tag-pf" id="newpass" 
                        onChange={(e) => {handleChange(); setPassword(e.target.value)}}/>
                    </div>
                    <div id="passconfirm">
                        <label className="label-pf" htmlFor="newpassconfirm">Confirm password</label>
                        <input type="password" className="input-tag-pf" id="newpassconfirm"
                        onChange={(e) => {handleChange(); setPasswordConfirm(e.target.value)}}/>
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