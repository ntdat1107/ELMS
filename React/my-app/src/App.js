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
import CourseMainPage, { LearnerCourseMainPage } from './componentJS/Guest/CourseMainPage';
import LnDashboard from './componentJS/Learner/js/dashboard';
import LnMyCourses from './componentJS/Learner/js/myCourses';
import LnTakeQuiz from './componentJS/Learner/js/takeQuiz';
import LnReadTutorial from './componentJS/Learner/js/readTutorial';
import LnReadNotes from './componentJS/Learner/js/readNotes';
import LnAnnouncements from './componentJS/Learner/js/announcements';
import LnManageProfile from './componentJS/Learner/js/manageProfile';
import AdminDashboard from './componentJS/Admin/AdminDashboard';
import AdminInstruc from './componentJS/Admin/AdminInstruc';
import AdminLearner from './componentJS/Admin/AdminLearner';
import AdminCourse from './componentJS/Admin/AdminCourse';
import AdminAnnounce from './componentJS/Admin/AdminAnnouncement';
import InstructorRegister from './componentJS/InstructorRegisterForm';
import CourseView from "./componentJS/Guest/CourseView";
import SearchLearnerUI from './componentJS/Guest/LearnerSearchPage';
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
            <Route exact path='/prelogin' component={PreLogin}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/forgotpass' component={ForgotPass}></Route>
            <Route exact path='/policy' component={Policy}></Route>
            <Route exact path='/search' component={SearchGuestUI}></Route>
            <Route exact path='/course/DADA' component={CourseMainPage}></Route>
            <Route exact path='/learner/dashboard'      component={LnDashboard}></Route>
            <Route exact path='/learner/mycourses'      component={LnMyCourses}></Route>
            <Route exact path='/learner/takequiz'       component={LnTakeQuiz}></Route>
            <Route exact path='/learner/readtutorial'   component={LnReadTutorial}></Route>
            <Route exact path='/learner/readnotes'      component={LnReadNotes}></Route>
            <Route exact path='/learner/announcements'  component={LnAnnouncements}></Route>
            <Route exact path='/learner/manageprofile'  component={LnManageProfile}></Route>
            <Route exact path='/admin/dashboard' component={AdminDashboard}></Route>
            <Route exact path='/admin/instructor' component={AdminInstruc}></Route>
            <Route exact path='/admin/learner' component={AdminLearner}></Route>
            <Route exact path='/admin/managecourse' component={AdminCourse}></Route>
            <Route exact path='/admin/announcement' component={AdminAnnounce}></Route>
            <Route exact path='/learner/registerInstructor' component={InstructorRegister}></Route>
            <Route exact path='/course_DADA' component={LearnerCourseMainPage}></Route>
            <Route exact path='/' component={HomePageUI}></Route>
            <Route exact path = "/course/1234/" component={CourseView} ></Route>
            <Route exact path = "/learner/search/" component={SearchLearnerUI} ></Route>
            
      </Switch>
    </Router>
  </div>  
  )
}

export default App;