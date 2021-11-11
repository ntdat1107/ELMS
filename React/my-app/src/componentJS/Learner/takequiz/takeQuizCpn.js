import React from 'react'
import FilterTQ from './filterTQ';
import TableTQ from './tableTQ';
function TakeQuizCpn() {
    return (
        <div id="takeQuizCpn">
            <div id="titleTQ">
                <p>Quizzes</p>
            </div>
            <div id="filterTQ">
                <FilterTQ />
            </div>
           <div id="tableContentQuiz">
                <div id="stateQuiz">
                        <div id="newQuiz"><p>New</p></div>
                        <div id="takenQuiz"><p>Taken</p></div>
                    </div>
                    <div id="tableTQ">
                        <TableTQ />
                    </div>
           </div>
        </div>
    )
}

export default TakeQuizCpn
