import React from 'react'
import learnerImg from './imgSrc/learnerImg.png'
import videoImg from './imgSrc/videoImg.png'
import courseImg from './imgSrc/courseImg.png'

function Statistic({
    learnerCount,
    videoCount,
    courseCount,
    callback = () => {},
}) {
    return (
        <div id="statisticDb">
            <div id="textStatistic">Statistic</div>
            <div id="learnerStatistic">
                <img src={learnerImg} alt="LearnerImg" id="learnerImg" />
                <p>{learnerCount} learners follow my courses</p>
            </div>
            <div id="botStatistic">
                <div id="videoStatistic">
                    <img src={videoImg} alt="videoImg" id="learnerImg" />
                    <p>I uploaded {videoCount} videos</p>
                </div>
                <div id="courseStatistic">
                    <img src={courseImg} alt="LearnerImg" id="learnerImg" />
                    <p>I am teaching {courseCount} courses</p>
                </div>
            </div>
        </div>
    )
}

export default Statistic
