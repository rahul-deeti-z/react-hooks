import React, { useEffect, useState } from 'react';

function UseEffectTwo() {
    const [x, setX] = useState(0)
    const [y, setY]= useState(0)
    const logMousePosition = e =>
    {
       console.log('logMousePosition')
       setX(e.clientX) 
       setY(e.clientY)
    }
    useEffect(() => {
        console.log('Mouse event added')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('Component unmounting')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []
    )
    return (
        <div>
            Mouse movement - X - {x} Y - {y}
        </div>
    );
}

export default UseEffectTwo;