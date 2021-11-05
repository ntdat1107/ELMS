import Login from "./Login"
import Signup from "./SignUp"
import ForgotPass from './ForgotPass'
import Policy from './Policy'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import PreLogin from "./PreLogin";

function LoginController() {
    return (
        <Router>
            <Switch>
                <Route exact path='/prelogin' component={PreLogin}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/signup' component={Signup}></Route>
                <Route exact path='/forgotpass' component={ForgotPass}></Route>
                <Route exact path='/policy' component={Policy}></Route>
            </Switch>
        </Router>
    )
    
}
export default LoginController