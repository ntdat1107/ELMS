import React from "react";
import { Link } from "react-router-dom"

function About() {    
    function handle() {
        this.props.history.goBack();
    }
    return (
        <div id="bground">
            <p id="titleFun">Learning is Fun!</p>
            <p id="descript">Learn fun awaywhere and anytime without any time limit just through the application.</p>
            <Link to="/ins/manageprofile" id="btn">
                <button id="getStarted">Get Started</button> 
            </Link >
        </div>
    )
}

export default About;