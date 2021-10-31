import React from "react";

function SideBarComponent({
    idName,
    srcImg,
    altName,
    name,
    h,
    m,
    callback = () => {},
}) {
    return (
    <li>
        <button>
            <img id={idName} src={srcImg} alt={altName} height={h} width={m}/>
            <p>{name}</p>
        </button>
    </li>
    )
}

export default SideBarComponent;