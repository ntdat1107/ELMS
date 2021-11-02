import React from 'react'

function courseForYouCpn({
    imgSrcCourse,
    altCourse,
    Name,
    Desc,
    Author,
    Type,
    rateScore,
    imgStar,
    totalRate
}) {
    return (
        <div id="courseCFY">
            <img id = "imgCourse" src={imgSrcCourse} alt = {altCourse} width = "240px" height = "120px"></img>
            <div id="courseContent">
                <p id = "Name">{Name}</p>
                <p id = "Desc">{Desc}</p>
                <p id = "Author">{Author}</p>
                <div id="rateContent">
                    <div id="p1"><p>{Type}</p></div>
                    <div id="p2"><p>{rateScore} </p></div>
                    <div id="p3"><img src= {imgStar} alt="star"></img></div>
                    <div id="p4"><p>{totalRate}</p></div>
                </div>
            </div>
        </div>
    )
}

export default courseForYouCpn;
