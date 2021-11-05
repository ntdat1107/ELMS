import React from 'react'
import python from "./imgSrc/python.png"
import JS from "./imgSrc/JS.png"
import {Link} from "react-router-dom"


function MyCourse({
    titleName,
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
                <Link to={"/ins/managecourse/python_for_beginner"}>
                    <div id="first-c">
                        <img src={python} alt="ImgCourse" />
                        <p>Python for beginners</p>
                    </div>
                </Link>
                <Link to={"/ins/managecourse/javascript"}>
                    <div id="second-c">
                        <img src={JS} alt="ImgCourse" />
                        <p>Javascript</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MyCourse
