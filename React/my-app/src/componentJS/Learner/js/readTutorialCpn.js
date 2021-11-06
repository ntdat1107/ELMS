import React from 'react'
import FilterRT from './filterRT';
import TableRT from './tableRT';
function ReadTutorialCpn() {
    return (
        <div id="readTutorialCpn">
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

export default ReadTutorialCpn
