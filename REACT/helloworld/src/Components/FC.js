import React from 'react';
import ReactDom from 'react-dom';

const FC=(props)=>{
const {name,role}=props
{
    console.log(props);
    return <h3>hello {name} and you are in the role {role}</h3>
}
}

export default FC;