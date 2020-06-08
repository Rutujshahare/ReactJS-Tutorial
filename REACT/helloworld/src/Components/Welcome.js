import React from 'react';

import ReactDom from 'react-dom';
const Welcome=(props)=>
{
console.log(props.name);  
return <h1>hello { props.name} and you are in {props.class}</h1>

}





export default Welcome;