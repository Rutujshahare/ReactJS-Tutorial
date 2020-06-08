import React, { Component } from 'react'
import './Mystyle.css';
import UserGreeting from './UserGreeting';



 class Stylesheet extends Component {
     constructor(props)
     {
         super(props)
         this.state=
         {
             message:'than you for the register'
         }
     }
     click()
     {
         this.setState(
             {
                 message:'welcome to the Gorakshan App'
             }
         )

     }
     
    render() {
        return (
            <div className={'Heading'} primary >
               <h2>{this.state.message}</h2> 
        <div className="button" onClick={this.click.bind(this)}><button>Get Started</button></div>
        <div><h3 style={heading}>gorakshan app patanbori </h3></div>
            </div>
       
            
        )
    }
}
const heading=
{
    color:'green',
    border:'2px'
}


export default Stylesheet

