import React, {useState} from 'react'
import arrow from "../img/arrow.png"
import { Link } from "react-router-dom"
import { typeUser } from '../componentJS/Login/PreLogin'


const checked = (typeUser === 3) ? "TA" : "";

function ArrowLN() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (        
        <div className="arrow-btn">            
            <div id="arrow" onClick={handleClick}>
                <img src={arrow} alt="ArrowImage" className="arrowImg" id={click? "arrowClose" : "arrowOpen"}/>
            </div>            
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <div id={"roleLn"+ checked}>
                    <li className= "nav-item">
                        <Link to='/learner/registerInstructor' className={"nav-link2"} onClick={closeMobileMenu}>Register to teach E-Learning</Link>
                        <Link to='/ins/dashboard' className={"nav-link3"} onClick={closeMobileMenu}>Switch to Instructor</Link>
                    </li>
                </div>
                <li className="nav-item">
                    <Link to='/' className="nav-link" onClick={closeMobileMenu}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default ArrowLN;