import React from 'react'
import './Error.css'

function ErrorMsg(props) {
    return (
        <section className="Cases-error">
            <h2 className="headerError">ERROR</h2>
            <p>Somthing went wrong! Click <a href="/login"> here</a> to return to Home Page.<br/>
            {props.msg}</p>
        </section>
    )
}

export default ErrorMsg
