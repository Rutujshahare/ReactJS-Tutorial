import React, { createRef } from 'react';
import Focus from './Focus';

class TextField extends React.Component {
    constructor(props) {
        super(props)
        this.ComponentRef=React.createRef()
    }
    clickhandler=()=>
    {
      this.ComponentRef.current. FocusInput()
    }
    render() {
        return (
            <div>
               <Focus  ref={this.ComponentRef}/> 
               <button onClick={this.clickhandler}>Click here </button>
            </div>
        )
    }
}
export default TextField