import React, { useState, Component } from "react";
import newannounbutton from "../Admin/image/NewAnnoun.png";
import "./NewAnnouncement.css";
import send from "../Admin/image/Send-button.png";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}

function NewAnnoun({ typeUserTemp }) {
    const arr = document.getElementsByTagName("input");

    const [click, setClick] = useState(false);
    const OpenNewAnnoun = () => setClick(true);
    const CloseNewAnnounBox = () => setClick(false);
    console.log(click);

    return (
        <div className="new-announ">
            <img onClick={OpenNewAnnoun} id="newannounbutton" src={newannounbutton} alt="New AnnouncementImage" width="70" height="70" />

            <div id="New-Announ-Box" className={click ? "boxbox show-up" : "boxbox"}>
                <div className="new-announ-modal-overlay"></div>
                <div className="new-announ-modal-body">
                    <form id="tick-box">
                        {typeUserTemp != 1 && (
                            <div id="tick-box-top">
                                <div id="tick-box-top-inside">
                                    <input name="tick-box" type="checkbox" value="All Instructor" /> All Instructors
                                </div>
                                <div id="tick-box-top-inside">
                                    <input name="tick-box" type="checkbox" value="All Learner" /> All Learners
                                </div>
                            </div>
                        )}
                        {typeUserTemp == 1 && (
                            <div id="tick-box-top">
                                <div id="tick-box-top-inside">
                                    <input name="tick-box" type="radio" value="All my learners" /> All my learners
                                </div>
                            </div>
                        )}
                    </form>
                    <div className="text-editor">
                        <TextEditor />
                    </div>

                    <p id="close-button" onClick={CloseNewAnnounBox}>
                        Close
                    </p>
                    <img id="send-button" onClick={CloseNewAnnounBox} src={send} alt="SendIcon" width="60px" height="'60px" />
                </div>
            </div>
        </div>
    );
}

export default NewAnnoun;
