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
    const Frame = {
        border: "solid #FC6B57"
    };


    return (
        <div id = "r"> 
            <div id = "container">
            <div style= {styleComponentLeft}>
                <div class = "user-container">
                    <div id = "Admin"> </div> 
                    <div class = "Frame" style={Frame}>
                        <div class="text">Admin</div>
                    </div>
                    
                </div>
            </div>
            
            <div style= {styleComponent}>
                <div class = "user-container">
                    <div id = "Instructor"> </div>
                    <div class = "Frame" style={Frame}>
                        <div class="text">Instructor</div>
                    </div>
                </div>
            </div>

            <div style= {styleComponentRight}>
                <div class = "user-container">
                    <div id = "Learner"> </div>
                    <div class = "Frame" style={Frame}>
                        <div class="text">Learner</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        )
    }

export default PreLogin;