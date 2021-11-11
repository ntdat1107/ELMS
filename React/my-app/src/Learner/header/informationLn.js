import React from "react";
import { Link } from "react-router-dom"
import ArrowLn from "./ArrowLn";


function InformationLn({
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
                    <il id="name"><h3>{name}</h3></il>
                </Link>
                <il id="gmail"><p>{gmail}</p></il>
                <il id="type"><p>{type}</p></il>
            </ul>
            <ArrowLn />
        </div>
    )
}


export default InformationLn;