import React from "react";

function DetailCpn({ email, FN, LN }) {
    return (
        <div id="detailCpn">
            <p id="email">{email}</p>
            <p id="FN">{FN}</p>
            <p id="LN">{LN}</p>
        </div>
    );
}

export default DetailCpn;
