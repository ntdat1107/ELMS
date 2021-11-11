import React from "react"
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
  export default BarChart;