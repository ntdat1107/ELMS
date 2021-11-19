import React from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
//   } from 'react-router-dom';

import "./CSS/CourseVideoView.css";
import MainPage from "./CourseVideoView";
import { OutsidePage } from "./CourseVideoView";
// import avt from "../../img/cheems.png"
import { BackButton } from './CourseMainPage'
// function V1() { 
//     return (
//         <div id = "V1">

//         </div>
//     )
// }
// function V2() { 
//     return (
//     <MainPage url = "https://www.youtube.com/watch?v=B1-LiR8FP9k"/>
//     )
// }
// function V3() { 
//     return (
//     <MainPage url = "https://www.youtube.com/watch?v=i9PSG5mFYoo"/>
//     )
// }
// function V4() { 
//     return (
//     <MainPage url = "https://www.youtube.com/watch?v=QDYDRA5JPLE"/>
//     )
// }
// function V5() { 
//     return (
//     <MainPage url = "https://www.youtube.com/watch?v=kTJczUoc26U"/>
//     )
// }
// function V6() { 
//     return (
//     <MainPage url = "https://www.youtube.com/watch?v=KRaWnd3LJfs"/>
//     )
// }
// function V7() { 
//     return (
//     <MainPage url = "https://www.youtube.com/watch?v=aJOTlE1K90k"/>
//     )
// }
//
//
//
//https://youtu.be/LHCob76kigA?list=RDMM
//https://youtu.be/_qPdi9D2rHA?list=RDMM
//https://youtu.be/_qPdi9D2rHA?list=RDMM


function CourseView({match}) {
    return(
        <div id = "CV">
            {/* <Router>
                <BackButton url = "/learner/dashboard" style = {{"z-index" : "1000"}} />
                <OutsidePage/>
                
                <Switch>
                    <Route exact path = "/course/1234/1_1" component={V1} ></Route>
                    <Route exact path = "/course/1234/1_2" component={V2} ></Route>
                    <Route exact path = "/course/1234/1_3" component={V3} ></Route>
                    <Route exact path = "/course/1234/2_1" component={V4} ></Route>
                    <Route exact path = "/course/1234/2_2" component={V5} ></Route>
                    <Route exact path = "/course/1234/2_3" component={V6} ></Route>
                    <Route exact path = "/course/1234/" component={V7} ></Route>

                </Switch> 
             
            </Router> */}
            <BackButton url = "/learner/dashboard" style = {{"z-index" : "1000"}} />
            <OutsidePage/>
            <MainPage match={match} url = "https://www.youtube.com/watch?v=D9G1VOjN_84"/>
        </div>
    )
}

export default CourseView;