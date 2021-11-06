import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Signup from './componentJS/Login/SignUp';
import Policy from './componentJS/Login/Policy';
import Login from './componentJS/Login/Login';
import ForgotPass from './componentJS/Login/ForgotPass';
import PreLogin from './componentJS/Login/PreLogin';
import HomePageGuestUi  from './componentJS/Guest/HomePageGuestUI'
import HomePageUI from './componentJS/Guest/HomePageGuestUI';
import InstructorUI from './componentJS/Instructor/InstructorUI';
import LoginController from './componentJS/Login/LoginController';

function App() {
  return (
  <div className="App">
    <HomePageGuestUi/>
  </div>  
  )
}

export default App;