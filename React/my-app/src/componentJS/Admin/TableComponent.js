import React from "react";
import { Link } from "react-router-dom"

function TableComponent({
    ID,
    FN,
    LN,
    callback = () => {},
}) {
    return (
    <div id="tablecomponent">
        <p id="ID">{ID}</p>
        <p id="FN">{FN}</p>
        <p id="LN">{LN}</p>
    </div>
    )
}

export default TableComponent;