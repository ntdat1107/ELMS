import React from "react";
import { Link } from "react-router-dom"
import Arrow from "./Arrow.js"



function Information({
    srcImg,
    linkAvt,
    name,
    gmail,
    type,
    callback = () => {},
}) {
    return (
        <div id="information">            
            <div id="avatar">
                <Link to={linkAvt}>
                    <img src={srcImg} alt="AvatarImage" width="60" height="auto"/>
                </Link>
            </div>
            <ul id="inform">
                <Link to="/ins/manageprofile" id="linkName">
                    <il id="name"><h3>{name}</h3></il>
                </Link>
                <il id="gmail"><p>{gmail}</p></il>
                <il id="type"><p>{type}</p></il>
            </ul>
            <Arrow />
        </div>
    )
}


export default Information;