import React from 'react'
import './Error.css'

function ErrorMsg({msg}) {
    return (
        <section className="Cases-error">
            <h2 className="headerError">ERROR</h2>
            <p>Somthing went wrong! Click <a href="/login"> here</a> to return to Home Page.<br/>
            <p id="msg-err">Error message: {msg}</p></p>
        </section>
    )
}

export default ErrorMsg
