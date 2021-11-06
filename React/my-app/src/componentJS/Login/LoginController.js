import Login from "./Login"
import Signup from "./SignUp"
import ForgotPass from './ForgotPass'
import Policy from './Policy'
import InstructorUI from '../Instructor/InstructorUI'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import PreLogin from "./PreLogin";
import HomePageUI from "../Guest/HomePageGuestUI"

function LoginController() {
    return (
        <Router>
            <Switch>
                <Route exact path='/ins/dashboard' component={InstructorUI} />
                <Route exact path='/prelogin' component={PreLogin}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/signup' component={Signup}></Route>
                <Route exact path='/forgotpass' component={ForgotPass}></Route>
                <Route exact path='/policy' component={Policy}></Route>
                <Route exact path='/' component={HomePageUI} />
            </Switch>
        </Router>
    )
    
}
export default LoginController