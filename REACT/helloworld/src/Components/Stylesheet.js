import React, { Component } from 'react'

class Stylesheet extends Component{
     constructor(props){
         super(props);
         this.state = {
             message:'than you for the register'
         }
     }
     click(){
         this.setState({
                 message:'welcome to the Gorakshan App'
             })
     }
     
    render() {
        return (
            <div className='Heading'>
               <h2>{this.state.message}</h2> 
               <div>
                    <button className="button" onClick={()=>this.click}>Get Started</button>
               </div>
            </div>
            
        )
    }
}

export default Stylesheet

