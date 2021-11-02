import React, {useState} from 'react'
import arrow from "../img/arrow.png"
import { Link } from "react-router-dom"


function Arrow() {
        const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);
    return (        
        <div className="arrow-btn">            
            <div id="arrow" onClick={handleClick}>
                <img src={arrow} alt="ArrowImage" id={click? "arrowClose" : "arrowOpen"}/>
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/ins/managecourse' className="nav-link" onClick={closeMobileMenu}>Switch to Learner</Link>
                </li>
                <li className="nav-item">
                    <Link to='/ins/announcement' className="nav-link" onClick={closeMobileMenu}>Logout</Link>
                </li>
                <li className="nav-item"></li>
            </ul>
        </div>
    )
}

export default Arrow;
