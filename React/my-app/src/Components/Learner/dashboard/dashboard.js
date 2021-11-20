import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./LnDashboard.css"
import { Link } from "react-router-dom"
import Calendar             from "../../Calendar/DbCalendar"
import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatatLn from '../../img/avtLn.png'
import CourseForYou from "./courseForYou";

//Start About
function About() {    
    return (
        <div id="bground">
            <p id="titleFun">Learning is Fun!</p>
            <p id="descript">Learn fun awaywhere and anytime without any time limit just through the application.</p>
            <Link to="/search" id="btn">
                <button id="getStarted">Get Started</button> 
            </Link >
        </div>
    )
}
//End About

//Start Chart
// function BarGroup(props) {
//     let height = props.d.value*10*2 
//     let xMid =  props.i * 40 + 50
//     let yMid = -props.d.value*10*2
//     return <g className="bar-group" style={{cursor: 'pointer'}}>
//     <text className="name-label" x={xMid+5} y={(yMid/2+height/2+10)} alignmentBaseline="middle" >{props.d.name}</text>
//     <rect id="rect1" x= {xMid} y={-140}  height={140} width={30} fill= "#c4c4c4" rx ="15" ry="15" />
//     <rect id="rect2" x= {xMid} y={yMid}  height={height} width={30} fill={props.color} rx ="15" ry="15" />
//     <text className="value-label" x={xMid+18} y={yMid+8} fill={props.color} alignmentBaseline="middle" >{props.d.value}</text>
//   </g>
//   }
// const colorOdd = "#F6BC00";
// const colorEven = "#FC6B57";
// class BarChart extends React.Component {
//     state = {
//         data: [
//         { name: 'Mo', value: 2 },
//         { name: 'Tu', value: 3 },
//         { name: 'We', value: 4 },
//         { name: 'Th', value: 5 },
//         { name: 'Fr', value: 4 },
//         { name: 'Sa', value: 3 },
//         { name: 'Su', value: 2 }
//         ]
// }

// render() {
//     let barGroups = this.state.data.map((d,i) => {
//         if((i + 1) % 2 === 0) {
//             return <g><BarGroup key = {i} d={d} i={i} color = {colorEven}/></g>
//         }
//         else {
//             return <g><BarGroup key = {i} d={d} i={i} color = {colorOdd}/></g>
//         }
//     } )                         
//     return <svg width="350" height="240">
//         <g className="colValue" transform="translate(10,10)">
//             <text x={4} y={45+14} alignmentBaseline="middle">7</text> 
//             <text x={4} y={65+14} alignmentBaseline="middle">6</text> 
//             <text x={4} y={85+14} alignmentBaseline="middle">5</text> 
//             <text x={4} y={105+14} alignmentBaseline="middle">4</text> 
//             <text x={4} y={125+14} alignmentBaseline="middle">3</text> 
//             <text x={4} y={145+14} alignmentBaseline="middle">2</text> 
//             <text x={4} y={165+14} alignmentBaseline="middle">1</text> 
//         </g>
//         <g className="container">
//             <text className="title" x="40" y="30">Weekly Spent Hours</text>
//             <g className="chart" transform="translate(0,200)">
//             {barGroups}
//             </g>
//         </g>
//     </svg>
//     }
// }
//End Chart 

//Start Course For You

//End Course For You
function LnDashboard({ history }) {
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isLearner) history.push('/login')
    }, [history, userInfo])

    return (
        <div id="lnDashBoardUI">
            <SideBar typeUserTemp={2}/>
            <Header history = {history}/>
            <div id="lnDashboard">
                <div id="about_CFY">
                    <About />
                    <CourseForYou />
                </div>
                <div id="calendar"><Calendar /></div>
            </div>
        </div>
    )
}

export default LnDashboard;