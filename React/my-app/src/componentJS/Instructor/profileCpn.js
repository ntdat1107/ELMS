import React, {useState} from 'react'
import camera from "./imgSrc/camera.png"


function ProfileCpn({
    srcImage,
    name,
}) {
    const [change, setChange] = useState(false)
    const handleChange = () => setChange(true);
    const saved = () => setChange(false)
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
                        <input className="input-tag-pf" type="text" id="input-lastname" name="lastname" onChange={handleChange}/>
                    </div>
                    <div id="f-name">
                        <label className="label-pf" for="input-fname">First Name</label>
                        <input className="input-tag-pf" type="text" id="input-fname" name="firstname" onChange={handleChange}   />
                    </div>
                    <div id="sex">
                        <label className="label-pf" for="sex">Sex</label>
                        <select className="input-tag-pf" id="input-sex" name="sex" onChange={handleChange} >
                            <option value="1" label="Male" />
                            <option value="0" label="Female" />
                            <option value="-1" label="Other" />
                        </select>
                    </div>
                </div>  
                <div id="row-2">
                    <div id="email">
                        <label className="label-pf" for="input-email">Email</label>
                        <input className="input-tag-pf" type="email"  id="input-email" name="email" onChange={handleChange} />
                    </div>
                    <div id="b-day" >
                        <label className="label-pf" for="input-birthday">Birthdate</label>
                        <input className="input-tag-pf" type="date" id="input-birthday" name="birthday" onChange={handleChange} />  
                    </div>
                </div>
                <div id="row-3">
                    <div id="contact-number">
                        <label className="label-pf" for="input-number">Contact number</label>
                        <input className="input-tag-pf" type="tel"  id="input-number" onChange={handleChange}/>
                    </div>
                </div>
                <div id="row-4">
                    <div id="city">
                        <label className="label-pf" for="input-city">City</label>
                        <input className="input-tag-pf" type="text"  id="input-city" onChange={handleChange}/>
                    </div>
                    <div id="country">
                        <label className="label-pf" for="input-country">Country</label>
                        <select className="input-tag-pf" type="text"  id="input-country" onChange={handleChange}>
                            <option label="Việt Nam" />
                            <option label="England" />
                            <option label="Japan" />
                            <option label="American" />
                            <option label="Singapore" />
                            <option label="India" />
                        </select>
                    </div>
                </div>
                <div id="row-5">
                    <div id="description">
                        <label className="label-pf" for="input-des">Description</label>
                        <textarea className="input-tag-pf" type="text" id="input-des" onChange={handleChange}/>
                    </div>
                </div>
                <div id="row-6">
                    <button id="save-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                        Save
                    </button>
                    <button id="cancel-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProfileCpn;