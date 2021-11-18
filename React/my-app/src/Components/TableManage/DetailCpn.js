import React from 'react'

function DetailCpn({
    userName,
    email,
    FN,
    LN,
}) {
    return (
        <div id="detailCpn">
            <p id="userName">{userName}</p>
            <p id="email">{email}</p>
            <p id="FN">{FN}</p>
            <p id="LN">{LN}</p>
        </div>
        )
}

export default DetailCpn
