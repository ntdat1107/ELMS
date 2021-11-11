import React from 'react'

function ItemNote({
    numberNote,
    courseNote,
    nameNote,
    idCourseNote,
    callback = () => {}
}) {
    return (
        <div className="itemNote" >
            <div id="numOfNote"><p>{numberNote}</p></div>
            <div className="courseNote" id = {"course" + idCourseNote}>
                <p>{courseNote}</p>
            </div>
            <div id="nameNote">
                <p>{nameNote} </p>
            </div>
            <input type="button" id="btnViewNote" value = "View PDF"/>
            <input type="button" id="btnDownloadNote" value = "Download PDF"/>
        </div>
    )
}

export default ItemNote;
