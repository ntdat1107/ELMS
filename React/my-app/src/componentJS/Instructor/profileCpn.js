import React from 'react'
import camera from "./imgSrc/camera.png"


const changedi = (()=> this.value="2002-10-12")


function ProfileCpn({
    srcImage,
    name,
}) {
    return (
        <div id="insMP">
            <div className="avatarChange">
                <img id="big-avt" src={srcImage} alt="Avatar" width="150px" height="auto" />
                <div id="container">
                    <img id="change-avt" src={camera} alt="button" width="30px" height="30px"/>
                </div>
                <p id="nameUser">{name}</p>
            </div>
            <label for="dateborn">Birthdate</label>
            <input type="date" id='dateborn' value="2001-07-11" onChange={changedi}/>
        </div>
    )
}
export default ProfileCpn;