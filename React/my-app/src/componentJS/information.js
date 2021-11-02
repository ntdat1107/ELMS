import React, {useState} from "react";
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
    const [click, setClick] = useState(false)
    return (
        <div id={idName}>            
            <div id="avatar">
                <Link to="/ins/manageprofile">
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
            <div id="arrow" onClick={() => setClick(!click)}>
                <img src={arrow} alt="ArrowImage" id={click? "arrowClose" : "arrowOpen"}/>
            </div>
        </div>
    )
}


export default Information;