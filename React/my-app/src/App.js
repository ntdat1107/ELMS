import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import InsDashboardUI from './Components/Instructor/InsDashboardUI'
import InsManageProfile from './Components/Instructor/InsManageProfile'
import InsManagerCourse from './Components/Instructor/InsManageCourse'
import InnerCourse from './Components/Instructor/InnerCourse'
import InsAnnouncement from './Components/Instructor/InsAnnouncement'
import TableOfLearner from './Components/Instructor/InsTableOfLearner'
import HomePageUI from './Components/Guest/HomePageGuestUI'
import Login from './Components/Login/Login'
import Signup from './Components/Login/SignUp'
import ForgotPass from './Components/Login/ForgotPass'
import Policy from './Components/Login/Policy'
import Page404 from './Components/Page404/Page404'
import CourseMainPage from './Components/Guest/CourseMainPage'
import LnDashboard from './Components/Learner/dashboard/dashboard'
import RegisterInsUI from './Components/Learner/registerIns/registerToIns'
import LnMyCourses from './Components/Learner/mycourses/myCourses'
import LnAnnouncements from './Components/Learner/announcement/announcements'
import LnManageProfile from './Components/Learner/manageprofile/manageProfile'
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminInstruc from './Components/Admin/AdminInstruc'
import AdminLearner from './Components/Admin/AdminLearner'
import AdminCourse from './Components/Admin/AdminCourse'
import AdminAnnounce from './Components/Admin/AdminAnnouncement'
import CourseView from "./Components/Guest/CourseView"
import SearchLearnerUI from './Components/Guest/LearnerSearchPage'
import AddCourseUI from './Components/Instructor/AddCourseUI'
import Logout from './Components/Login/Logout'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/ins/dashboard' component={InsDashboardUI}></Route>
          <Route exact path='/ins/manageprofile' component={InsManageProfile}></Route>
          <Route exact path='/ins/managecourse' component={InsManagerCourse}></Route>
          <Route exact path='/ins/managecourse/:id' component={InnerCourse}></Route>
          <Route exact path='/ins/announcement' component={InsAnnouncement}></Route>
          <Route exact path='/ins/managecourse/:fastName/manage_my_learners' component={TableOfLearner}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/forgotpass' component={ForgotPass}></Route>
          <Route exact path='/policy' component={Policy}></Route>
          <Route exact path='/course/:id' component={CourseMainPage}></Route>
          <Route exact path='/learner/dashboard' component={LnDashboard}></Route>
          <Route exact path='/learner/mycourses' component={LnMyCourses}></Route>
          <Route exact path='/learner/mycourses/search/:keyword' component={LnMyCourses}></Route>
          <Route exact path='/learner/announcements' component={LnAnnouncements}></Route>
          <Route exact path='/learner/manageprofile' component={LnManageProfile}></Route>
          <Route exact path='/admin/dashboard' component={AdminDashboard}></Route>
          <Route exact path='/admin/manageinstructor' component={AdminInstruc}></Route>
          <Route exact path='/admin/managelearner' component={AdminLearner}></Route>
          <Route exact path='/admin/managecourse' component={AdminCourse}></Route>
          <Route exact path='/admin/announcement' component={AdminAnnounce}></Route>
          <Route exact path="/course/:id/:token" component={CourseView} ></Route>
          <Route exact path="/search/" component={SearchLearnerUI} ></Route>
          <Route exact path='/search/:token' component={SearchLearnerUI} ></Route>
          <Route exact path="/learner/registerIns" component={RegisterInsUI} ></Route>
          <Route exact path='/ins/addcourse' component={AddCourseUI} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/' component={HomePageUI}></Route>
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;