import React from "react";
import { NavLink } from "react-router-dom"

function SideBarComponent({
    idName,
    srcImg,
    altName,
    cName,
    name,
    h,
    w,
    linkName,
    func,
    callback = () => {},
}) {
    return (
    <li className={cName}> <NavLink activeClassName="ActiveLink" className="insSideBarLink" to={linkName}>
        <button onClick={func}>
            <img id={idName} src={srcImg} alt={altName} height={h} width={w}/>
            <p>{name}</p>
        </button> </NavLink>
    </li>
    )
}

export default SideBarComponent;