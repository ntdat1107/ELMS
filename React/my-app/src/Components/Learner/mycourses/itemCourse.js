import React, {useState} from 'react'
import moreImg from "../img/icon/more.png"
import share from "../img/icon/shareM.png"
import favorite from "../img/icon/favoriteM.png"
import archived from "../img/icon/archivedM.png"
import {Link} from 'react-router-dom'
import RatingCourse from '../../Rating/ratingCpn'
import deleteIcon from '../img/icon/deleteIcon.png'
import star05 from '../img/rateStar/star0_5.png'
import star15 from '../img/rateStar/star1_5.png'
import star25 from '../img/rateStar/star2_5.png'
import star35 from '../img/rateStar/star3_5.png'
import star45 from '../img/rateStar/star4_5.png'
import star1 from '../img/rateStar/star1.png'
import star2 from '../img/rateStar/star2.png'
import star3 from '../img/rateStar/star3.png'
import star4 from '../img/rateStar/star4.png'
import star5 from '../img/rateStar/star5.png'
import star0 from '../img/rateStar/star0.png'
function OpenMore() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (        
        <div className="more-btn" style={{position: 'absolute'}}>            
            <div id="more" onClick={handleClick}>
                <img style={{cursor: 'pointer'}} src={moreImg} alt="MoreImage" className="moreImg" id={click? "moreClose" : "moreOpen"}/>
            </div>            
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li style={{cursor: 'pointer'}} className="nav-item" onClick={closeMobileMenu}>
                    <img src={share} alt="ShareImg" width="15px" height="15px"></img>
                    <p>Share</p>
                </li>
                <li style={{cursor: 'pointer'}} className="nav-item" onClick={closeMobileMenu}>
                    <img src={favorite} alt="FavoriteImg" width="15px" height="15px"></img>
                    <p>Favorite</p>
                </li>
                <li style={{cursor: 'pointer'}} className="nav-item" onClick={closeMobileMenu}>
                    <img src={archived} alt="ArchivedImg" width="15px" height="15px"></img>
                    <p>Archived</p>
                </li>
            </ul>
        </div>
    )
}
function OpenRate({imgCourse, nameCourse, authorCourse, rateScore}) {
    let star = star0
    // Choose Star Img
    if (rateScore > 0 && rateScore < 1) star = star05
    else if (rateScore === 1) star = star1
    else if (rateScore > 1 && rateScore < 2) star = star15
    else if (rateScore === 2) star = star2
    else if (rateScore > 2 && rateScore < 3) star = star25
    else if (rateScore === 3) star = star3
    else if (rateScore > 3 && rateScore < 4) star = star35
    else if (rateScore === 4) star = star4
    else if (rateScore > 4 && rateScore < 5) star = star45
    else if (rateScore === 5) star = star5
    return (        
        <div className="rate-btn">            
            <div id="rate">
                <img src={star} alt="Img rating" style={{cursor: "pointer"}}/>
            </div>            
        </div>
    )
}

function ItemCourse({
    nameCourse,
    authorCourse,
    imgCourse,
    rateScore,
    callback = () => {}
}) {
    return (
        <div className="itemCourse" >
            <div className="imgCourse" style={{overflow: "hidden"}}>
                <img src={imgCourse} alt = "Course Img" style={{borderBottom: "1px solid #000", width: "240px"}}></img>
                <OpenMore />
            </div>
            <div id="nameCourse">
                <Link className="Link-coursename" to="/course/1234/">
                    <p>{nameCourse}</p>
                </Link>
            </div>
            <div id="authorCourse">
                <p>{authorCourse} </p>
            </div>
            <div className="rateCourseMC">
                <div id = {rateScore == 0 ? "notScore" : "hadScore"}>
                    <OpenRate 
                        imgCourse = {imgCourse} 
                        nameCourse = {nameCourse} 
                        authorCourse = {authorCourse}
                        rateScore = {rateScore}
                    />
                    <p style={{cursor: "pointer"}}>Your rating</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCourse;
