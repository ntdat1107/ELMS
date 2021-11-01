import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"
import Header from './componentJS/header';
import InstructorUI from './componentJS/Instructor/InstructorUI';



function App() {
  return (
  <div className="App">
    <InstructorUI />
  </div>  
  )
}

export default App;