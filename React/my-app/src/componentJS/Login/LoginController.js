import Login from "./Login"
import Signup from "./SignUp"
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
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/signup' component={Signup}></Route>
                <Route exact path='/' component={PreLogin}></Route>
            </Switch>
        </Router>
    )
    
}
export default LoginController