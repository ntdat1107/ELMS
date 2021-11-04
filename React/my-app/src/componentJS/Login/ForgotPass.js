import './CSS/ForgotPass.css'

function ForgotPass() {
    return (
        <div class="page">
            <div class="container">
                <div id="header">
                    <div id="txt1" class="txt">Forgot your password?</div>
                <div id="txt2" class ="txt">We’ll email you to help you reset it</div>
                </div>
                

                <input class = "impBx" type="text"></input>
                <div class="btn-box">
                    <button type="button" class="toggle-btn1">Reset</button>
                    <button type="button" class="toggle-btn2">Cancel</button>

                </div>  
            </div>
        </div>
        )
    }
    
    export default ForgotPass;