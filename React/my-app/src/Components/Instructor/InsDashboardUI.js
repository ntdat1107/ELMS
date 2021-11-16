import React, {useEffect} from "react";
import './CSS/InsDashboard.css'
import DbCalendar from "../Calendar/DbCalendar";
import Statistic from "./Statistic";
import MyCourse from "./MyCourse";
import SideBarInstructor from '../SideBar/SideBar';
import Header from '../Header/header'
import cheems from "../img/cheems.png"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function About() {    
    return (
        <div id="bground">
            <p id="titleFun">Learning is Fun!</p>
            <p id="descript">Learn fun awaywhere and anytime without any time limit just through the application.</p>
            <Link to="/ins/managecourse" id="btn">
                <button id="getStarted">Get Started</button> 
            </Link >
        </div>
    )
}

function BarGroup(props) {
    let height = props.d.value*10*4
    let xMid =  props.i * 40 + 50
    let yMid = -props.d.value*10*4
    return <g className="bar-group">
    <text className="name-label" x={xMid - 5} y={(yMid/4+height/4+10+140)} alignmentBaseline="middle" >{props.d.name}</text>
    <rect id="rect1" x= {xMid-10} y={-280+140}  height={280} width={30} fill= "#c4c4c4" rx ="15" ry="15" />
    <rect id="rect2" x= {xMid-10} y={yMid+140}  height={height} width={30} fill={props.color} rx ="15" ry="15" />
    <text className="value-label" x={xMid+18-10} y={yMid+8+140} fill={props.color} alignmentBaseline="middle" >{props.d.value}</text>
  </g>
  }
const colorOdd = "#F6BC00";
const colorEven = "#FC6B57";
class BarChart extends React.Component {
    state = {
        data: [
        { name: 'Mo', value: 2 },
        { name: 'Tu', value: 3 },
        { name: 'We', value: 4 },
        { name: 'Th', value: 5 },
        { name: 'Fr', value: 4 },
        { name: 'Sa', value: 3 },
        { name: 'Su', value: 2 }
        ]
}

render() {
    let barGroups = this.state.data.map((d,i) => {
        if((i + 1) % 2 === 0) {
            return <g key = {i}><BarGroup key = {i} d={d} i={i} color = {colorEven}/></g>
        }
        else {
            return <g key = {i}><BarGroup key = {i} d={d} i={i} color = {colorOdd}/></g>
        }
    } )                         
    return <svg width="350px" height="400px">
        <g className="colValue" transform="translate(10, 0)">
            <text x={4} y={45+14} alignmentBaseline="middle">7</text> 
            <text x={4} y={85+14} alignmentBaseline="middle">6</text> 
            <text x={4} y={125+14} alignmentBaseline="middle">5</text> 
            <text x={4} y={165+14} alignmentBaseline="middle">4</text> 
            <text x={4} y={205+14} alignmentBaseline="middle">3</text> 
            <text x={4} y={245+14} alignmentBaseline="middle">2</text> 
            <text x={4} y={285+14} alignmentBaseline="middle">1</text> 
        </g>
        <g className="container">
            <text className="title" x="30" y="30">Weekly Spent Hours</text>
            <g className="chart" transform="translate(0, 200)">
                {barGroups}
            </g>
        </g>
    </svg>
    }
}

function InsDashboardUI ({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo) history.push('/login')
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo])
    return (
        <div id="insdb">
            <SideBarInstructor typeUserTemp={1}/>
            <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" 
            gmail="tiendat_2001vn@gmail.com" type="Instructor"
            idName="information" typeUserTemp={1}/>
            <div id="col1">
                <About />
                <Statistic learnerCount="500" videoCount="20" courseCount="6"/>
                <div id="WSH">
                    <BarChart />
                </div>
            </div>
            <div id="col2">
                <DbCalendar />
                <MyCourse titleName="My courses" heightSize="60px" widthSize="60px"/>
            </div>
        </div>
    )
}

export default InsDashboardUI;