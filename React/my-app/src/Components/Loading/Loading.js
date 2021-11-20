import React from 'react'
import './Loading.css'
import loadimg from '../img/loading.gif'

function Loading() {
    return (
        <div className="loader-container">
            <div className="loaderImg">
                <img src = {loadimg}/>
            </div>
        </div>
    )
}

export default Loading
