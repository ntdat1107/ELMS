import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import AdminDashboard from "./AdminDashboard"
import AdminManagerCourse from "./AdminCourse"
import AdminAnnouncement from "./AdminAnnouncement"
import AdminInstruc from "./AdminInstruc"
import AdminLearner from "./AdminLearner"

function AdminUI() {
return (
    <Router>      
    <Switch>            
        <Route exact path='/admin/dashboard' component={AdminDashboard}></Route>
        <Route exact path='/admin/instructor' component={AdminInstruc}></Route>
        <Route exact path='/admin/learner' component={AdminLearner}></Route>
        <Route exact path='/admin/managecourse' component={AdminManagerCourse}></Route>
        <Route exact path='/admin/announcement' component={AdminAnnouncement}></Route>
    </Switch>
    </Router>
    );
}


export default AdminUI;


