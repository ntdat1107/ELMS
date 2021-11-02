import React from "react";
import { Link } from "react-router-dom"

function NumofUComponent({
    idName,
    srcImg,
    altName,
    name,
    number,
    h,
    w,
    linkName,
    func,
    callback = () => {},
}) {
    return (
    <div id={idName}>
        <p id="title">{name}</p>
        <p id="num">{number}</p>
        <img id="numicon" src={srcImg} alt={altName} height={h} width={w}/>

        <Link to={linkName} id="seeall">
            <p id="See_all">See all</p> 
        </Link>
    </div>
    )
}

export default NumofUComponent;