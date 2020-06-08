import React from 'react';

function ChildComponent(props)
{
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>child component</button>
        </div>
    )
}
export default ChildComponent;