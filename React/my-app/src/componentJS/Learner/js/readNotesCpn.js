import React from 'react'
import FilterRN from './filterRN';
import TableRN from './tableRN';
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
