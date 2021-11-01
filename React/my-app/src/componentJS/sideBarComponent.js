import React from "react";

function SideBarComponent({
    idName,
    srcImg,
    altName,
    cName,
    name,
    h,
    m,
    func,
    callback = () => {},
}) {
    return (
    <li className={cName} >
        <button onClick={func}>
            <img id={idName} src={srcImg} alt={altName} height={h} width={m}/>
            <p>{name}</p>
        </button>
    </li>
    )
}

export default SideBarComponent;