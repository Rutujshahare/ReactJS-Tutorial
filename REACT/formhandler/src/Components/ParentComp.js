import React from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            name:'rutuj'
        }
    }

componentDidMount()
{
    setInterval(()=>
    {
       this.setState(
           {
               name:'rutuj'
           }
       )
    },2000)
}
    render()
    {
        return (
            <div>
                <h2>this is a parent components</h2>
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>

            </div>
        )
    }
}
export default ParentComp;