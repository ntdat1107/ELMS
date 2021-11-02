import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Header from '../../header';
import SideBarLearner       from '../../LearnerSideBar';
import LnDashboard          from "./dashboard";
import LnMyCourses          from "./myCourses";
import LnTakeQuiz           from "./takeQuiz";
import LnReadTutorial       from "./readTutorial";
import LnReadNotes          from "./readNotes";
import LnAnnouncements      from "./announcements";
import LnManageProfile      from "./manageProfile";
import {logo} from "../../../img/avatarLearner.png";


function LearnerUI() {
return (
    <Router>
        <div className="lnUI">
        <SideBarLearner/>
        <Header link="/learner/dashboard" srcImg={logo} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
        idName="information"/>
        </div>      
        <Switch>            
            <Route exact path='/learner/dashboard'      component={LnDashboard}></Route>
            <Route exact path='/learner/mycourses'      component={LnMyCourses}></Route>
            <Route exact path='/learner/takequiz'       component={LnTakeQuiz}></Route>
            <Route exact path='/learner/readtutorial'   component={LnReadTutorial}></Route>
            <Route exact path='/learner/readnotes'      component={LnReadNotes}></Route>
            <Route exact path='/learner/announcements'  component={LnAnnouncements}></Route>
            <Route exact path='/learner/manageprofile'  component={LnManageProfile}></Route>
        </Switch>
    </Router>
    );
}


export default LearnerUI;