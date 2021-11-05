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
                <Link to={"/ins/managecourse/python_for_beginner"}>
                    <div id="first-c">
                        <img src={manageLearner} alt="learnerImg" />
                        <p>Manage learner</p>
                    </div>
                </Link>
                <Link to={"/ins/managecourse/javascript"}>
                    <div id="second-c">
                        <img src={notifyImg} alt="notifyImg" />
                        <p>Notify</p>
                    </div>
                </Link>
                <Link to={"/ins/managecourse/javascript"}>
                    <div id="second-c">
                        <img src={plus} alt="plusImg" />
                        <p>New section</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default OtherAction
