import React from "react";
import { Link } from "react-router-dom"
import open from "../img/openMore.png"

function Information({
    srcImg,
    name,
    gmail,
    type,
    idName,
    callback = () => {},
}) {
    return (
        <div id={idName}>            
            <div id="avatar">
                <Link to="/leaner/manageprofile">
                    <img src={srcImg} alt="AvatarImage" width="60" height="auto"/>
                </Link>
            </div>
            <ul id="info">
                <il id="name"><h3>{name}</h3></il>
                <il id="gmail"><p>{gmail}</p></il>
                <il id="type"><p>{type}</p></il>
            </ul>
            <img src={open} alt="OpenMoreImage" id="arrow" width="30" height="15"/>
        </div>
    )
}


export default Information;