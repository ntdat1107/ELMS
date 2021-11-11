import React from 'react'

function ItemTutorial({
    courseTutorial,
    titleTutorial,
    idCourseTutorial,
    descTutorial,
    idTutorial,
    callback = () => {}
}) {
    return (
        <div className="itemTutorial" >
            <div id = {"imgTutorial" + idCourseTutorial}></div>
            <div id="contentTutorial">
                <div id="rowTutorialInfo1">
                    <div className="courseTutorial" id = {"course" + idTutorial}>
                        <p>{courseTutorial}</p>
                    </div>
                    <div id="titleTutorial">
                        <p>{titleTutorial}</p>
                    </div>
                </div>
                <div id="rowTutorialInfo2">
                    <div id="descTutorial">
                        <p>{descTutorial}</p>
                    </div>
                </div>
                <div id="rowTutorialInfo3">
                    <input type="button" id="btnReadTutorial" value = "Read more"/>
                </div>
            </div>
        </div>
    )
}

export default ItemTutorial;
