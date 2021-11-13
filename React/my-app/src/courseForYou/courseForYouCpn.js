import React from 'react'
import { Link } from 'react-router-dom';
import './courseForYou.css';
import RateContent from './RateContent';
function courseForYouCpn({
    imgSrcCourse,
    Name,
    Desc,
    Author,
    Type,
    rateScore,
    totalRate,
    tagColor,
    linkName
}) {
    return (
        <div id="courseCFY">
            <Link to={linkName}>
                <img id = "imgCourse" src={imgSrcCourse} alt = "courseImg" width = "240px" height = "120px"></img>
            </Link>
            <div id="courseContent">
                <Link className="Link-coursename" to={linkName}>
                    <p id = "Name">{Name}</p>
                </Link>
                <p id = "Desc">{Desc}</p>
                <p id = "Author">{Author}</p>
                <RateContent TypeCpn={Type} rateScoreCpn={rateScore} totalRateCpn={totalRate} tagColorCpn={tagColor} />
            </div>
        </div>
    )
}

export default courseForYouCpn;
