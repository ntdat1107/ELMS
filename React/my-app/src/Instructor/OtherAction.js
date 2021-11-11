import React from 'react'
import {Link} from "react-router-dom"
import plus from './imgSrc/plus.png'
import notifyImg from './imgSrc/notify.png'
import manageLearner from './imgSrc/manageLearner.png'

function OtherAction() {
    return (
        <div id="other-action">
            <div id="head">
                <div id="action-title">Other actions</div>
            </div>
            <div id="action-list">
                <Link className="link-action" to={"/ins/managecourse/manage_my_learners"}>
                    <div id="first-act">
                        <img className="imgAction" src={manageLearner} alt="learnerImg" height="50px" width="50px" />
                        <p className="text-action">Manage learner</p>
                    </div>
                </Link>
                <Link className="link-action" to={"/ins/announcement"}>
                    <div id="second-act">
                        <img className="imgAction" src={notifyImg} alt="notifyImg" height="40px" width="50px" />
                        <p className="text-action">Notify</p>
                    </div>
                </Link>
                    <div id="third-act">
                        <img className="imgAction" src={plus} alt="plusImg" height="50px" width="50px" />
                        <p className="text-action">New section</p>
                    </div>
            </div>
        </div>
    )
}

export default OtherAction
