import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Header from '../../header';
import SideBarLearner       from '../../sideBarLearner';
import LnDashboard          from "./dashboard";
import LnMyCourses          from "./myCourses";
import LnTakeQuiz           from "./takeQuiz";
import LnReadTutorial       from "./readTutorial";
import LnReadNotes          from "./readNotes";
import LnAnnouncements      from "./announcements";
import LnManageProfile      from "./manageProfile";
import avt from "../../../img/cheems.png";


function LearnerUI() {
return (
    <Router>
        <div className="lnUI">
        <SideBarLearner/>
        <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avt} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
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