function PreLogin() {
    return (
        <div id = "container">
            <div style="width: 320px; height: 450px; margin-left: 10%;">
                <div class = "user-container">
                    <div id = "Admin"> </div> 
                    <div class = "Frame" style="border: solid #F6BC00;">
                        <div class="text">Admin</div>
                    </div>
                    
                </div>
            </div>
            
            <div style="width: 320px; height: 450px;">
                <div class = "user-container">
                    <div id = "Instructor"> </div>
                    <div class = "Frame" style="border: solid #FC6B57;">
                        <div class="text">Instructor</div>
                    </div>
                </div>
            </div>

            <div style="width: 320px; height: 450px;margin-right: 10%;">
                <div class = "user-container">
                    <div id = "Learner"> </div>
                    <div class = "Frame" style="border: solid #58BAAB;">
                        <div class="text">Learner</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default PreLogin;