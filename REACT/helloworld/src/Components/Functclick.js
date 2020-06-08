import React from 'react';
import ReactDom from 'react-dom';

function Functclick()
{
    function click()
    {
        alert('you have clicked on the button');
    }
    return (
       <div>
           <button onClick={click}>click function</button>
       </div>
    )
}

export default Functclick;