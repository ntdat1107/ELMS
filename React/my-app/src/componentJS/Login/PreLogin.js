import './CSS/PreLogin.css'
import {Link} from 'react-router-dom';
function PreLogin() {
    const styleComponentLeft = {
        width: "320",
        height: "450px",
        marginLeft: "10%"
    };
    const styleComponent = {
        width: "320",
        height: "450px",
    };
    const styleComponentRight = {
        width: "320",
        height: "450px",
        marginRight: "10%"
    };

    return (
        <div id = "PreLoginr"> 
            <div id = "PreLogincontainer">
                
                <div style= {styleComponentLeft}>
                    <div className = "PreLoginuser-container">
                        <Link className="PreloginLink" to="/login">
                            <div id = "PreLoginAdmin"> </div>
                            <div className = "PreLoginFrame" style={{border: "solid #F6BC00"}}>
                                <div className="PreLogintext">Admin</div>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div style= {styleComponent}>
                    <div className = "PreLoginuser-container">
                        <Link className="PreloginLink" to="/login">
                            <div id = "PreLoginInstructor"> </div>
                            <div className = "PreLoginFrame" style={{border: "solid #FC6B57"}} onClick = {function() {console.log("Instructor")}}>
                                <div className="PreLogintext">Instructor</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div style= {styleComponentRight}>
                    <div className = "PreLoginuser-container">
                        <Link className="PreloginLink" to="/login">
                            <div id = "PreLoginLearner"> </div>
                            <div className = "PreLoginFrame" style={{border: "solid #58BAAB"}} onClick = {function() {console.log("Leanrner")}}>
                                <div className="PreLogintext">Learner</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

export default PreLogin;