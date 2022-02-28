import React, { useState } from 'react';
import UseEffectTwo from './UseEffectTwo';

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
           <button onClick={() => setDisplay(!display)} >Toggle display</button>
           {display && <UseEffectTwo />} 
        </div>
    );
}

export default MouseContainer;