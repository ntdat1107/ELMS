import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
// import InsManageProfile from './Instructor/InsManageProfile';
import InsDashboardUI from './Instructor/InsDashboardUI';
// import InsManagerCourse from './Instructor/InsManageCourse';
// import InnerCourse from './Instructor/InnerCourse';
// import InsAnnouncement from './Instructor/InsAnnouncement';
// import TableOfLearner from './Instructor/InsTableOfLearner';
// import HomePageUI from './Guest/HomePageGuestUI';
// import PreLogin from './Login/PreLogin';
// import Login from './Login/Login';
// import Signup from './Login/SignUp';
// import ForgotPass from './Login/ForgotPass';
// import Policy from './Login/Policy';
// import SearchGuestUI from './Guest/SearchGuest';
// import CourseMainPage, { LearnerCourseMainPage } from './Guest/CourseMainPage';
// import LnDashboard from './Learner/dashboard/dashboard';
// import LnMyCourses from './Learner/js/myCourses';
// import LnTakeQuiz from './Learner/js/takeQuiz';
// import LnReadTutorial from './Learner/js/readTutorial';
// import LnReadNotes from './Learner/js/readNotes';
// import LnAnnouncements from './Learner/js/announcements';
// import LnManageProfile from './Learner/js/manageProfile';
// import AdminDashboard from './Admin/AdminDashboard';
// import AdminInstruc from './Admin/AdminInstruc';
// import AdminLearner from './Admin/AdminLearner';
// import AdminCourse from './Admin/AdminCourse';
// import AdminAnnounce from './Admin/AdminAnnouncement';
// import CourseView from "./Guest/CourseView";
// import SearchLearnerUI from './Guest/LearnerSearchPage';
function App() {
  return (
  // <div className="App">
  //   <Router>
  //     <Switch>
  //           <Route exact path='/ins/manageprofile' component={InsManageProfile}></Route>            
  //           <Route exact path='/ins/dashboard' component={InsDashboardUI}></Route>
  //           <Route exact path='/ins/managecourse' component={InsManagerCourse}></Route>
  //           <Route exact path='/ins/managecourse/inner' component={InnerCourse}></Route>
  //           <Route exact path='/ins/announcement' component={InsAnnouncement}></Route>
  //           <Route exact path='/ins/managecourse/manage_my_learners' component={TableOfLearner}></Route>
  //           <Route exact path='/prelogin' component={PreLogin}></Route>
  //           <Route exact path='/login' component={Login}></Route>
  //           <Route exact path='/signup' component={Signup}></Route>
  //           <Route exact path='/forgotpass' component={ForgotPass}></Route>
  //           <Route exact path='/policy' component={Policy}></Route>
  //           <Route exact path='/search' component={SearchGuestUI}></Route>
  //           <Route exact path='/course/DADA' component={CourseMainPage}></Route>
  //           <Route exact path='/learner/dashboard'      component={LnDashboard}></Route>
  //           <Route exact path='/learner/mycourses'      component={LnMyCourses}></Route>
  //           <Route exact path='/learner/takequiz'       component={LnTakeQuiz}></Route>
  //           <Route exact path='/learner/readtutorial'   component={LnReadTutorial}></Route>
  //           <Route exact path='/learner/readnotes'      component={LnReadNotes}></Route>
  //           <Route exact path='/learner/announcements'  component={LnAnnouncements}></Route>
  //           <Route exact path='/learner/manageprofile'  component={LnManageProfile}></Route>
  //           <Route exact path='/admin/dashboard' component={AdminDashboard}></Route>
  //           <Route exact path='/admin/instructor' component={AdminInstruc}></Route>
  //           <Route exact path='/admin/learner' component={AdminLearner}></Route>
  //           <Route exact path='/admin/managecourse' component={AdminCourse}></Route>
  //           <Route exact path='/admin/announcement' component={AdminAnnounce}></Route>
  //           <Route exact path='/course_DADA' component={LearnerCourseMainPage}></Route>
  //           <Route exact path='/' component={HomePageUI}></Route>
  //           <Route exact path = "/course/1234/" component={CourseView} ></Route>
  //           <Route exact path = "/learner/search/" component={SearchLearnerUI} ></Route>
            
  //     </Switch>
  //   </Router>
    <InsDashboardUI />
  // </div>  
  )
}

export default App;