import React from 'react'

function DetailCpn({
    ID,
    FN,
    LN,
}) {
    return (
        <div id="detailCpn">
            <p id="ID">{ID}</p>
            <p id="FN">{FN}</p>
            <p id="LN">{LN}</p>
        </div>
        )
}

export default DetailCpn
