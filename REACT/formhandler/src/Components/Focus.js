import React, { createRef } from 'react';
import ReactDom from 'react-dom';

class Focus extends React.Component {
    constructor(props) {
        super(props)
        this.FocusRef=React.createRef()
    }
    FocusInput()
    {
        this.FocusRef.current.focus()
    }
    render() {

        return (
            <div>
                <input type="text" ref={this.FocusRef} />
            </div>
        )
    }
}
export default Focus