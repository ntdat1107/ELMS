import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Header from '../header';
import './CSS/InstructorUI.css'
import SideBarInstructor from '../sideBarInstructor';
import InsDashboardUI from "./InsDashboardUI";
import InsManagerCourse from "./InsManageCourse";
import InsAnnouncement from "./InsAnnouncement"
import InsManageProfile from "./InsManageProfile"
import cheems from "../../img/cheems.png"
import InnerCourse from "./innerCourse";
import TableOfLearner from "./TableOfLearner";


function InstructorUI() {
return (
<div className="insUI">
    <Router>
        <SideBarInstructor/>
        <Header linkAvt="/ins/manageprofile" link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="information"/>
        <Switch>
            <Route exact path='/ins/manageprofile' component={InsManageProfile}></Route>            
            <Route exact path='/ins/dashboard' component={InsDashboardUI}></Route>
            <Route exact path='/ins/managecourse' component={InsManagerCourse}></Route>
            <Route exact path='/ins/managecourse/inner' component={InnerCourse}></Route>
            <Route exact path='/ins/announcement' component={InsAnnouncement}></Route>
            <Route exact path='/ins/managecourse/manage_my_learners' component={TableOfLearner}></Route>
        </Switch>
    </Router>
</div>
);
}


export default InstructorUI;