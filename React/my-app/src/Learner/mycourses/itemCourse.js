import React, {useState} from 'react'
import moreImg from "../img/icon/more.png"
import share from "../img/icon/shareM.png"
import favorite from "../img/icon/favoriteM.png"
import archived from "../img/icon/archivedM.png"
import {Link} from 'react-router-dom'
function OpenMore() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (        
        <div className="more-btn">            
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

function ItemCourse({
    nameCourse,
    authorCourse,
    progressScore,
    idCourse,
    scoreRate,
    callback = () => {}
}) {
    return (
        <div className="itemCourse" >
            <div className="imgCourse" id = {idCourse}>
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
            <svg id="progressBarBase" width="230" height="10">
                <rect width="230" height="10" fill="#c4c4c4" />
                <rect width={progressScore * 230 / 100} height="10" fill="#05611E" />
            </svg>
            <div id="rateCourse-stateProgress">
                <div className={progressScore === 0 ? "start" : "started"}>
                        <div id="progressStarted">
                            <p>{progressScore + "% COMPLETE"}</p>
                        </div>
                        <div id="progressStart">
                            <p>START COURSE</p>
                        </div>
                </div>
                <div className="rateCourseMC">
                    <div id = {scoreRate == 0 ? "notScore" : "hadScore"}>
                        <div id={"score" + scoreRate}></div>
                        <p>Your rating</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCourse;
