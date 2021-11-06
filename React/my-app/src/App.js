import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import InsManageProfile from './componentJS/Instructor/InsManageProfile';
import InsDashboardUI from './componentJS/Instructor/InsDashboardUI';
import InsManagerCourse from './componentJS/Instructor/InsManageCourse';
import InnerCourse from './componentJS/Instructor/InnerCourse';
import InsAnnouncement from './componentJS/Instructor/InsAnnouncement';
import TableOfLearner from './componentJS/Instructor/TableOfLearner';
import HomePageUI from './componentJS/Guest/HomePageGuestUI';
import PreLogin from './componentJS/Login/PreLogin';
import Login from './componentJS/Login/Login';
import Signup from './componentJS/Login/SignUp';
import ForgotPass from './componentJS/Login/ForgotPass';
import Policy from './componentJS/Login/Policy';
import SearchGuestUI from './componentJS/Guest/SearchGuest';
import CourseMainPage from './componentJS/Guest/CourseMainPage';

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
            <Route exact path='/ins/manageprofile' component={InsManageProfile}></Route>            
            <Route exact path='/ins/dashboard' component={InsDashboardUI}></Route>
            <Route exact path='/ins/managecourse' component={InsManagerCourse}></Route>
            <Route exact path='/ins/managecourse/inner' component={InnerCourse}></Route>
            <Route exact path='/ins/announcement' component={InsAnnouncement}></Route>
            <Route exact path='/ins/managecourse/manage_my_learners' component={TableOfLearner}></Route>
            <Route exact path='/learner/dashboard' component={InsDashboardUI} />
            <Route exact path='/admin/dashboard' component={InsDashboardUI} />
            <Route exact path='/learner/dashboard' component={InsDashboardUI} />
            <Route exact path='/prelogin' component={PreLogin}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/forgotpass' component={ForgotPass}></Route>
            <Route exact path='/policy' component={Policy}></Route>
            <Route exact path='/search' component={SearchGuestUI}></Route>
            <Route exact path='/course/DADA' component={CourseMainPage}></Route>
            <Route exact path='/' component={HomePageUI}></Route>
      </Switch>
    </Router>
  </div>  
  )
}

export default App;