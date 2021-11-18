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
                <img src={imgCourse} alt = "Course Img"  style={{height: "100px"}}></img>
            </div>
           <div id="r2">
                <div id="nameCourseRate">
                    <p>{nameCourse}</p>
                </div>
                <div id="authorCourseRate">
                    <p>{authorCourse} </p>
                </div>
           </div>
        </div>
    )
}


export default RatingInfo;
