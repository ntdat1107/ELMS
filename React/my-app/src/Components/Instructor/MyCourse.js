import React from 'react'
import python from "./imgSrc/python.png"
import cpp from "./imgSrc/cpp.png"
import html from "./imgSrc/html.png"
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
                <Link to={"/ins/managecourse/inner"} style={{color: "black"}}>
                    <div id="first-c">
                        <img src={python} alt="ImgCourse" height={heightSize} width={widthSize}/>
                        <p style={{fontSize: "24px", height: "50px", whiteSpace: "nowrap", overflow: "hidden",
                            textOverflow: "ellipsis", width:"245px"
                        }}>
                            Python for beginners
                        </p>
                    </div>
                </Link>
                <Link to={"/ins/managecourse/inner"}style={{color: "black"}}>
                    <div id="second-c">
                        <img src={JS} alt="ImgCourse" height={heightSize} width={widthSize} />
                        <p style={{fontSize: "24px", height: "50px", whiteSpace: "nowrap", overflow: "hidden",
                            textOverflow: "ellipsis", width:"245px"
                        }}>
                            Javascript
                        </p>
                    </div>
                </Link>
                <Link to={"/ins/managecourse/inner"}style={{color: "black"}}>
                    <div id="second-c">
                        <img src={cpp} alt="ImgCourse" height={heightSize} width={widthSize} />
                        <p style={{fontSize: "24px", height: "50px", whiteSpace: "nowrap", overflow: "hidden",
                            textOverflow: "ellipsis", width:"245px"
                        }}>
                            C++ for beginners
                        </p>
                    </div>
                </Link>
                <Link to={"/ins/managecourse/inner"}style={{color: "black"}}>
                    <div id="second-c">
                        <img src={html} alt="ImgCourse" height={heightSize} width={widthSize} />
                        <p style={{fontSize: "24px", height: "50px", whiteSpace: "nowrap", overflow: "hidden",
                            textOverflow: "ellipsis", width:"245px"
                        }}>
                            HTML for advanced
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MyCourse
