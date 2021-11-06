import React from 'react'

function ItemTutorial({
    numberTutorial,
    courseTutorial,
    nameTutorial,
    idCourseTutorial,
    callback = () => {}
}) {
    return (
        <div className="itemTutorial" >
            <div id="numOfTutorial"><p>{numberTutorial}</p></div>
            <div className="courseTutorial" id = {"course" + idCourseTutorial}>
                <p>{courseTutorial}</p>
            </div>
            <div id="nameTutorial">
                <p>{nameTutorial} </p>
            </div>
            <input type="button" id="btnViewTutorial" value = "View PDF"/>
            <input type="button" id="btnDownloadTutorial" value = "Download PDF"/>
        </div>
    )
}

export default ItemTutorial;
