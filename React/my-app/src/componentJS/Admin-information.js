import React from "react";
import arrow from "../img/arrow.png"

function InformationAdmin({
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
                    <img src={srcImg} alt="Avatar Image" width="60" height="auto"/>
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


export default InformationAdmin;