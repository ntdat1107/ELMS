import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"
import Header from '../header';
import SideBarInstructor from '../sideBar';
import InsDashboardUI from "./InsDashboardUI";
import InsManagerCourse from "./InsManageCourse";
import InsAnnouncement from "./InsAnnouncement"
import InsManageProfile from "./InsManageProfile"


function InstructorUI() {
return (
    <Router>
        <div className="insUI">
        <SideBarInstructor/>
        <Header />
        </div>      
        <Switch>
            <Route exact path='/ins/manageprofile' component={InsManageProfile}></Route>            
            <Route exact path='/ins/dashboard' component={InsDashboardUI}></Route>
            <Route exact path='/ins/managecourse' component={InsManagerCourse}></Route>
            <Route exact path='/ins/announcement' component={InsAnnouncement}></Route>
        </Switch>
    </Router>
    );
}


export default InstructorUI;