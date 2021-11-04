import React from 'react'
import bell from ".././img/bell.png";
import bellRing from ".././img/bellRing.png"
import message from ".././img/message.png";
function BellMessage() {
    return (
        <div id = "bellMessage">
            <div id="bell">
                <img id = "bellImg" src={bell} alt="BellImg" />
            </div>
            <div id="message">
                <img id = "messageImg" src={message} alt="MessageImg" />
            </div>
        </div>
    )
}

export default BellMessage;