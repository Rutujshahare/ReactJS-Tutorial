import React from 'react';
import Input from './Input';

class FormInput extends React.Component
{
    constructor()
    {
        super()
        {
            this.componentRef=React.createRef()
        }
    }
    clickhandler=()=>
    {
        this.componentRef.current.focus()
    }
    render()
    {
        return (
            <div>
             <Input  ref={this.componentRef}/>
             <button onClick={this.clickhandler} >FormInput</button>
            </div>
        )
    }
}
export default FormInput