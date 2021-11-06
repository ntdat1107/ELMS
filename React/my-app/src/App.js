import './App.css';
import LearnerUI from './componentJS/Learner/js/learnerUI';
import InstructorUI from './componentJS/Instructor/InstructorUI';
import Signup from './componentJS/Login/SignUp';
import Policy from './componentJS/Login/Policy';
import Login from './componentJS/Login/Login';
import ForgotPass from './componentJS/Login/ForgotPass';
import PreLogin from './componentJS/Login/PreLogin';
import AdminUI from './componentJS/Admin/AdminUI';
import HomePageGuestUi  from './componentJS/Guest/HomePageGuestUI'
import LoginController from './componentJS/Login/LoginController';

function App() {
  return (
  <div className="App">
    {/* <HomePageGuestUi/> */}
    {/* <LearnerUI /> */}
    <InstructorUI />
    {/* <AdminUI /> */}
    {/* <LoginController /> */}
  </div>  
  )
}

export default App;