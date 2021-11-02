import React from 'react'

function Statistic({
    learnerCount,
    videoCount,
    courseCount,
    callback = () => {},
}) {
    return (
        <div id="statisticDb">
            {/* <p>I have {learnerCount} Learners</p> */}
        </div>
    )
}

export default Statistic
