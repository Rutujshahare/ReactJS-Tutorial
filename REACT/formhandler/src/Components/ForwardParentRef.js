import React from 'react';
import ForwardRef from './ForwardRef';

class ForwardParentRef extends React.Component {
    constructor() {
        super()
        this.inputref=React.createRef()
    }
    clickhandler=()=>
    {
        this.inputref.current.focus()

    }
    render() {
        return (
            <div>
                <ForwardRef ref={this.inputref}/>
                <button onClick={this.clickhandler}>Forward Ref Click</button>
            </div>
        )
    }
}
export default ForwardParentRef