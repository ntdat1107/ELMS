import React from 'react'
import DropListTutorial from './dropListTutorial';
function FilterRT() {
    return (
        <div id = "filterRT">
            <div id="titleRT">
                <p>Tutorial</p>
            </div>
            <div id="rowFilterRT">
                <div id="typeFilter">
                    Courses:
                </div>
                <div id="filterTutorial">
                    <DropListTutorial />
                </div>
            </div>
        </div>
    )
}

export default FilterRT
