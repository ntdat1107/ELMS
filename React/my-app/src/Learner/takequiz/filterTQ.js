import React from 'react'
import DropListQuiz from './dropListQuiz';
function FilterTQ() {
    return (
        <div id = "filterTQ">
            <div id="typeFilter">
                Courses:
            </div>
            <div id="filterQuiz">
                <DropListQuiz />
            </div>
        </div>
    )
}

export default FilterTQ
