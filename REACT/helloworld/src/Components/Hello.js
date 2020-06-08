import React,{Component} from 'react';

import ReactDom from 'react-dom';

const Hello=()=>
{
   // return(
    // <div id=>
        // <h1>Rutuj Shahare and this is the JSX of the JAVASCRIPT</h1>
     //</div>
    //)
//}

// without JSX file code of the program look like

return React.createElement('div',{id:'hello',className:'Dummy'},React.createElement('h1','null','rutuj shahare and this is a code of without JSX '));
}

export default Hello;