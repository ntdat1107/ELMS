import React, {useState} from 'react'

function Test() {
    const [state, setState] = useState(1)

    const handle = () => {
        setState(state + 3)
    }
       
    return (
    <div>
        <div>{state}</div>
        <button onClick={handle}>a</button>
        
        <button onClick={handle}>b</button>
    </div>
    );

}

export default Test;
