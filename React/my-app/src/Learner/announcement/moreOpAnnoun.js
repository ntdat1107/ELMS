import React from 'react'
import noRead from "../img/icon/noRead.png"
import read from "../img/icon/read.png"
import flag from "../img/icon/flag.png"
import clear from "../img/icon/clear.png"
function MoreOpAnnoun() {
    return (
        <div id="moreOption">
            <div id="iconNoReadAnnoun"><img src = {noRead} alt="NoReadIcon"></img></div>    
            <div id="iconReadAnnoun"><img src = {read} alt="ReadIcon"></img></div>    
            <div id="iconFlagAnnoun"><img src = {flag} alt="FlagIcon"></img></div>    
            <div id="iconClear"><img src = {clear} alt="clearIcon"></img></div>    
        </div>
    )
}

export default MoreOpAnnoun
