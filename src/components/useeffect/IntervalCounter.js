import React, { useEffect, useState } from 'react';

function IntervalCounter() {
    const [count, setCount] = useState(0)
    const [tempCount, setTempCount] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return() => {
            clearInterval(interval)
        }
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default IntervalCounter;