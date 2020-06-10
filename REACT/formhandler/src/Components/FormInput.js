import React from 'react';
import Input from './Input';

export default class FormInput extends React.Component{
    constructor(){
        super(propd);
        
        this.componentRef=React.createRef();

        this.clickhandler = this.clickhandler.bind(this);
        
    }
    clickhandler(){
        this.componentRef.current.focus()
    }
    // clickhandler = () =>{
    //     this.componentRef.current.focus()
    // }
    render(){
        return (
            <div>
             <Input  ref={this.componentRef}/>
             <button onClick={this.clickhandler} >FormInput</button>
            </div>
        )
    }
}
// export default FormInput