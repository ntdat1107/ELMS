import React from 'react'
import FilterRN from './filterRN';
import TableRN from './tableRN';
function TakeNoteCpn() {
    return (
        <div id="takeNoteCpn">
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

export default TakeNoteCpn
