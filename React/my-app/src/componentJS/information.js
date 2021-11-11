import React from "react";
import { Link } from "react-router-dom"
import Arrow from "./Arrow";


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
                <Link to={linkAvt} id="linkName">
                    <li id="name"><h3>{name}</h3></li>
                </Link>
                <li id="gmail"><p>{gmail}</p></li>
                <li id="type"><p>{type}</p></li>
            </ul>
            <Arrow />
        </div>
    )
}


export default Information;