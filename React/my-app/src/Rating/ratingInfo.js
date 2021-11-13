import React from 'react'


function RatingInfo({
    nameCourse,
    authorCourse,
    progressScore,
    imgCourse,
    callback = () => {}
}) {
    return (
        <div className="ratingInfo" >
            <div className="imgCourse" id="r1" style={{overflow: "hidden"}}>
                <img src={imgCourse} alt = "Course Img"  style={{height: "135px"}}></img>
            </div>
           <div id="r2">
                <div id="nameCourse">
                    <p>{nameCourse}</p>
                </div>
                <div id="authorCourse">
                    <p>{authorCourse} </p>
                </div>
                <div id="progressCourse">
                    <svg id="progressBarBase" width="300" height="20">
                        <rect width="300" height="20" fill="#c4c4c4" />
                        <rect width={progressScore * 300 / 100} height="20" fill="#05611E" />
                    </svg>
                </div>
                <div className={progressScore === 0 ? "start" : "started"}>
                    <div id="progressStarted">
                        <p>{progressScore + "% COMPLETE"}</p>
                    </div>
                    <div id="progressStart">
                        <p>START COURSE</p>
                    </div>
                </div>
           </div>
        </div>
    )
}


export default RatingInfo;
