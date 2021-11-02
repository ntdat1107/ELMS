import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Header from '../header';
import SideBarInstructor from '../sideBarInstructor';
import InsDashboardUI from "./InsDashboardUI";
import InsManagerCourse from "./InsManageCourse";
import InsAnnouncement from "./InsAnnouncement"
import InsManageProfile from "./InsManageProfile"
import cheems from "../../img/cheems.png"


function InstructorUI() {
return (
    <Router>
        <div className="insUI">
        <SideBarInstructor/>
        <Header link="/ins/dashboard" srcImg={cheems} name="Ngọ Tiến Đạt" gmail="tiendat_2001vn@gmail.com" type="Instructor"
        idName="informationInstructor"/>
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