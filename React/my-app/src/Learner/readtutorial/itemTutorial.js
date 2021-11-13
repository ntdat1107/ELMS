import React from 'react'

function ItemTutorial({
    courseTutorial,
    titleTutorial,
    imgCourseTutorial,
    descTutorial,
    idTutorial,
    callback = () => {}
}) {
    return (
        <div className="itemTutorial" >
            <div className="imgCourseTutorial">
                <img src={imgCourseTutorial} alt="Img Course" style={{height: "90px"}}/>
            </div>
            <div id="contentTutorial">
                <div id="rowTutorialInfo1">
                    <div className="courseTutorial" id = {"course" + idTutorial}>
                        <p style={{fontSize: "14px"}}>{courseTutorial}</p>
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
                    <input style={{cursor: 'pointer'}} type="button" id="btnReadTutorial" value = "Read more"/>
                </div>
            </div>
        </div>
    )
}

export default ItemTutorial;
