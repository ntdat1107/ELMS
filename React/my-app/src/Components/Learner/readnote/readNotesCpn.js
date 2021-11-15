import React from 'react'
import FilterRN from './filterRN';
import TableRN from './tableRN';
function ReadNoteCpn() {
    return (
        <div id="readNoteCpn">
            <div id="filterRN">
                <FilterRN />
            </div>
           <div id="tableContentNote">
                <div id="tableRN">
                    <TableRN />
                </div>
           </div>
        </div>
    )
}

export default ReadNoteCpn
