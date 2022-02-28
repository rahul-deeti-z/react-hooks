import React, {useState} from 'react';

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const safeIncrement = () =>
    {
        for(let i=0; i<5; i++)
        {
            setCount(prevCount => prevCount+1)
        }
    }
    return (
        <div>
            Count: {count}    <br/>
            {/* This is unsafe increment method */}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            {/* This is safe increment method */}
            <button onClick={safeIncrement}>increment 5</button>
        </div>
    );
}

export default HookCounterTwo;