import React from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'
import RatingInfo from './ratingInfo'
import cpp1 from '../Learner/img/course/cpp1.jpg'
import './rating.css'
function RatingCpn() {
    return (
        <div id="ratingCpn">
            <div id="row1">
                <RatingInfo 
                    imgCourse= {cpp1}
                    nameCourse= "Gitting Started: Step-by-Step Git and Github Crash Course"
                    authorCourse = "Abhin Chhabra, Senior Sotfware Engineer"
                    progressScore =  {50}
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
