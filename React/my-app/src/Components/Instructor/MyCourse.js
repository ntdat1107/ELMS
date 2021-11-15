import React from 'react'
import python from "./imgSrc/python.png"
import JS from "./imgSrc/JS.png"
import {Link} from "react-router-dom"


function MyCourse({
    titleName,
    widthSize,
    heightSize,
}
) {
    return (
        <div id="mycourse">
            <div id="head">
                <div id="my-c-title">{titleName}</div>
                <Link to="/ins/managecourse">
                    <div id="my-c-viewall">View All</div>
                </Link>
            </div>
            <div id="my-c-list">
                <Link to={"/ins/managecourse/inner"}>
                    <div id="first-c">
                        <img src={python} alt="ImgCourse" height={heightSize} width={widthSize}/>
                        <p>Python for beginners</p>
                    </div>
                </Link>
                <Link to={"/ins/managecourse/inner"}>
                    <div id="second-c">
                        <img src={JS} alt="ImgCourse" height={heightSize} width={widthSize} />
                        <p>Javascript</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MyCourse
