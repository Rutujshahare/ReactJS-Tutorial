import React from 'react';

class Eventbind extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            message:'hello'
        }
    }
    clickhandler()
    {
        this.setState({
            message:'goodbye!'
        })
         
        
    }

    render()
    {
        return (
            <div>
                <div>{this.state.message}</div>
           <button onClick={this.clickhandler.bind(this)}> binding the event</button>//

                <button onClick={()=>{this.clickhandler()}}> binding the event</button>
            </div>
        )
    }
}
export default Eventbind;