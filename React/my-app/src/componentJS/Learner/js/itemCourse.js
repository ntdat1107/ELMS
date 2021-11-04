import React from 'react'
import moreImg from "../img/more.png"

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
            <div class="imgCourse" id = {idCourse}>
                <img id="more" src={moreImg} alt="moreImg"/>
            </div>
            <div id="nameCourse">
                <p>{nameCourse}</p>
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
