import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom"
import bground from "./imgSrc/About.png"

function About() {    
    function handle() {
        this.props.history.goBack();
    }
    return (
        <div id="about">
            <img src={bground} alt="Background Image" id="bgr" width="50%" height="50%" />
            <Link to="/ins/manageprofile">
            <button id="getStarted">Get Started</button> 
            </Link >
            <p>Learning is Fun!</p>
            <p>Learn fun awaywhere and anytime without any time limit just through the application.</p>
        </div>
    )
}

export default About;