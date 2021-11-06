import React from 'react'
import FilterRT from './filterRT';
import TableRT from './tableRT';
function TakeTutorialCpn() {
    return (
        <div id="takeTutorialCpn">
            <div id="filterRT">
                <FilterRT />
            </div>
           <div id="tableContentTutorial">
                <div id="tableRT">
                    <TableRT />
                </div>
           </div>
        </div>
    )
}

export default TakeTutorialCpn
