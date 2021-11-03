import './CSS/PreLogin.css'

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
        <div id = "r"> 
            <div id = "container">
            <div style= {styleComponentLeft}>
                <div className = "user-container">
                    <div id = "Admin"> </div> 
                    <div className = "Frame" style={{border: "solid #F6BC00"}} onClick = {function() {console.log("Admin")}}>
                        <div className="text">Admin</div>
                    </div>
                    
                </div>
            </div>
            
            <div style= {styleComponent}>
                <div className = "user-container">
                    <div id = "Instructor"> </div>
                    <div className = "Frame" style={{border: "solid #FC6B57"}} onClick = {function() {console.log("Instructor")}}>
                        <div className="text">Instructor</div>
                    </div>
                </div>
            </div>

            <div style= {styleComponentRight}>
                <div className = "user-container">
                    <div id = "Learner"> </div>
                    <div className = "Frame" style={{border: "solid #58BAAB"}} onClick = {function() {console.log("Leanrner")}}>
                        <div className="text">Learner</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        )
    }

export default PreLogin;