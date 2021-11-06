import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import './CSS/InstructorUI.css'
import InsDashboardUI from "./InsDashboardUI";
import InsManagerCourse from "./InsManageCourse";
import InsAnnouncement from "./InsAnnouncement"
import InsManageProfile from "./InsManageProfile"
import InnerCourse from "./InnerCourse";
import TableOfLearner from "./TableOfLearner";
import SideBarInstructor from '../sideBarInstructor';
import Header from '../header';
import cheems from "../../img/cheems.png"
import HomePageUI from "../Guest/HomePageGuestUI";

function InstructorUI() {
return (
<div className="insUI">
    <Router>
        <Switch>
            <Route exact path='/ins/manageprofile' component={InsManageProfile}></Route>            
            <Route exact path='/ins/dashboard' component={InsDashboardUI}></Route>
            <Route exact path='/ins/managecourse' component={InsManagerCourse}></Route>
            <Route exact path='/ins/managecourse/inner' component={InnerCourse}></Route>
            <Route exact path='/ins/announcement' component={InsAnnouncement}></Route>
            <Route exact path='/ins/managecourse/manage_my_learners' component={TableOfLearner}></Route>
            <Route exact path='/' component={HomePageUI}></Route> 
        </Switch>
    </Router>
</div>
);
}


export default InstructorUI;