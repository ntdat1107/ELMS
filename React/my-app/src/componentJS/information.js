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
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
            <div id="arrow" onClick={handleClick}>
                <img src={arrow} alt="ArrowImage" id={click? "arrowClose" : "arrowOpen"}/>
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/ins/managecourse' onClick={closeMobileMenu}>managecourse</Link>
                </li>
                <li className="nav-item">
                    <Link to='/ins/announcement' onClick={closeMobileMenu}>announcement</Link>
                </li>
                <li className="nav-item"></li>
            </ul>
        </div>
    )
}


export default Information;