import React, { useState} from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'
import RatingInfo from './ratingInfo'
import cpp1 from '../Learner/img/course/cpp1.jpg'
import './rating.css'
function RatingCpn(imgCourse, nameCourse, authorCourse, progressScore) {
    const [setClick] = useState(false);
    const closeMenuRate = () => setClick(false);
    return (
        <div id="ratingCpn">
            <div id="row1">
                <RatingInfo 
                    imgCourse= {cpp1}
                    nameCourse= "MyCourse"
                    authorCourse = "abc"
                    progressScore = {50}
                />
            </div>
            <div id="titleRating"><p>Please leave your rating</p></div>
            <div id="row2">
                <div id="ratingStar">
                    <RatingStar />
                </div>
                <RatingCmt />
            </div>
        </div>
    )
}

export default RatingCpn
