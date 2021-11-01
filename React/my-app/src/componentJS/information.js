import React from "react";
import { Link } from "react-router-dom"
import arrow from "../img/arrow.png"

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
                <Link to="/ins/manageprofile">
                    <img src={srcImg} alt="Avatar Image" width="60" height="auto"/>
                </Link>
            </div>
            <ul id="inform">
                <il id="name"><h3>{name}</h3></il>
                <il id="gmail"><p>{gmail}</p></il>
                <il id="type"><p>{type}</p></il>
            </ul>
            <img src={arrow} alt="Arrow Image" id="arrow" width="30" height="15"/>
        </div>
    )
}


export default Information;