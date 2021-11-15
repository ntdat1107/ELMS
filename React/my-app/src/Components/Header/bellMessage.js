import React from 'react'
import Bell from "./bellNoti"
import Message from "./messageNoti"
function BellMessage() {
    return (
        <div id = "bellMessage">
            <div id="bell">
                <Bell />
            </div>
            <div id="message">
                <Message />
            </div>
        </div>
    )
}

export default BellMessage;