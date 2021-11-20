import React from 'react'
import star0 from '../Learner/img/rateStar/star0.png'
import star05 from '../Learner/img/rateStar/star0_5.png'
import star15 from '../Learner/img/rateStar/star1_5.png'
import star25 from '../Learner/img/rateStar/star2_5.png'
import star35 from '../Learner/img/rateStar/star3_5.png'
import star45 from '../Learner/img/rateStar/star4_5.png'
import star1 from '../Learner/img/rateStar/star1.png'
import star2 from '../Learner/img/rateStar/star2.png'
import star3 from '../Learner/img/rateStar/star3.png'
import star4 from '../Learner/img/rateStar/star4.png'
import star5 from '../Learner/img/rateStar/star5.png'


const styleBC = {
    backgroundColor: "#F8D92E",
    color: "#4B0C0C"
}
const styleN = {
    backgroundColor: "#C4C4C4",
    color: "#000000"
}
const styleH = {
    backgroundColor: "#EC5454",
    color: "#FFFFFF"
}

function RateContent({
    TypeCpn,
    rateScoreCpn,
    totalRateCpn
}) {
    let star = star0
    let styleType = styleN
    // Choose Star Img
    if (rateScoreCpn > 0 && rateScoreCpn < 1) star = star05
    else if (rateScoreCpn === 1) star = star1
    else if (rateScoreCpn > 1 && rateScoreCpn < 2) star = star15
    else if (rateScoreCpn === 2) star = star2
    else if (rateScoreCpn > 2 && rateScoreCpn < 3) star = star25
    else if (rateScoreCpn === 3) star = star3
    else if (rateScoreCpn > 3 && rateScoreCpn < 4) star = star35
    else if (rateScoreCpn === 4) star = star4
    else if (rateScoreCpn > 4 && rateScoreCpn < 5) star = star45
    else if (rateScoreCpn === 5) star = star5
    // Choose Style
    if (TypeCpn) {
        if (TypeCpn.toUpperCase() === "Hot".toUpperCase()) styleType = styleH
        else if (TypeCpn.toUpperCase() === "Best course".toUpperCase()) styleType = styleBC
        else if (TypeCpn.toUpperCase() === "New".toUpperCase()) styleType = styleN
    }
    return (
        <div id="rateContent">
            <div id="p1" style={styleType}><p>{TypeCpn}</p></div>
            {rateScoreCpn != 0 && <div id="p2"><p>{Math.round(rateScoreCpn * 100) / 100} </p></div> }
            {rateScoreCpn != 0 && <div id="p3"><img src= {star} alt="star"></img></div>}
            {totalRateCpn != 0 && <div id="p4"><p>({totalRateCpn})</p></div>}
        </div>
    )
}

export default RateContent
