import React, {useState} from 'react'
import newannounbutton from "../Admin/image/NewAnnoun.png"
import './CSS/NewAnn.css'
import { Link } from "react-router-dom"
import TextEditor from '../Admin/TextEditor'


function NewAnn() {
    const [click, setClick] = useState(false)
    const OpenNewAnnoun = () => setClick(!click)
    const CloseNewAnnounBox = () => setClick(false)
    console.log(click);

    return (        
        <div className="new-announ">  

            <img onClick={OpenNewAnnoun} id="newannounbutton" src={newannounbutton} alt="New Announcement Image" width="70" height="70"/>

            <div id="New-Announ-Box" className={click? 'boxbox show-up' : 'boxbox'}>
                <form id="tick-box">
                    <div id="tick-box-top">
                        <div id="tick-box-top-inside"><input name="tick-box" type="checkbox" value="All My Learner" /> All My Learner</div>
                    </div>
                    <div id="tick-box-bottom">
                        <div id='hihaho'><input name="tick-box" type="checkbox" value="Send to" /> Send to: </div>
                        <input id='input-receiver' name="input-receiver" type="text" placeholder="Enter Receiver..." />
                    </div>
                </form>
                <div className="text-editor">
                    <TextEditor />
                </div>

                <p id='close-button' onClick={CloseNewAnnounBox}>Close</p>
            </div>

        </div>
    )
}

export default NewAnn;