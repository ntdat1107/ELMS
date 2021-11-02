import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import HeaderAdmin from '../header';
import SideBarAdmin from '../Admin-sideBar';
import AdminDashboardUI from "./AdminDashboard";
import AdminManagerCourse from "./AdminCourse";
import AdminAnnouncement from "./AdminAnnouncement"
import AdminInstruc from "./AdminInstruc"
import AdminLearner from "./AdminLearner"
import cheems from "../../img/cheems.png"

function AdminUI() {
return (
    <Router>
        <div className="AdminUI">
        <SideBarAdmin/>
        <HeaderAdmin linkAvt="/admin/dashboard" link="/admin/dashboard" srcImg={cheems} name="Mai Đức Long" gmail="maiduclong@gmail.com" type="Admin"
        idName="informationInstructor"/>
        </div>      
    <Switch>            
        <Route exact path='/ins/dashboard' component={AdminDashboardUI}></Route>
        <Route exact path='/ins/instructor' component={AdminInstruc}></Route>
        <Route exact path='/ins/learner' component={AdminLearner}></Route>
        <Route exact path='/ins/managecourse' component={AdminManagerCourse}></Route>
        <Route exact path='/ins/announcement' component={AdminAnnouncement}></Route>
    </Switch>
    </Router>
    );
}


export default AdminUI;


