import React from 'react';

class Input extends React.Component
{
    constructor(props)
    {
        super(props)

        this.inputRef=React.createRef()
    }
    Forminput()
    {
        this.inputRef.current.focus()
    }
    render()
    {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
              
            </div>
        )
    }
}

export default Input;
