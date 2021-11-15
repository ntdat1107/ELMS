import React from 'react'

function ItemQuiz({
    nameQuiz,
    courseQuiz,
    lengthQuiz,
    idCourseQuiz,
    callback = () => {}
}) {
    return (
        <div className="itemQuiz" >
            <div id="nameQuiz">
                <p>{nameQuiz}</p>
            </div>
            <div className="courseQuiz" id = {"course" + idCourseQuiz}>
                <p>{courseQuiz}</p>
            </div>
            <div id="lengthQuiz">
                <p>{lengthQuiz} </p>
            </div>
            <input style={{cursor: 'pointer'}} type="button" id="btnStartQuiz" value = "Start Quiz"/>
        </div>
    )
}

export default ItemQuiz;
