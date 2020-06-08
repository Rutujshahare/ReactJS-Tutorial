import React, { Component } from 'react'

 class Condition extends Component {
     constructor()
     {
         super()
         this.state=
         {
             isLoggedIn:false
         }
     }
    render() {

        return (
            this.state.isLoggedIn?
            <div>this is 3 method Login</div>:
            <div>this is 3 method User guest</div>

            
        )
        // let message
        // if(this.state.isLoggedIn)
        // {
        //      message=
        //         <div>Hello Rutuj Shahare</div>
            
        // }
        // else
        // {
        //     message=
        //         <div>Hello user Login account</div>
            
        // }
        // return (
        // <div>{message}</div>
        // ) 
        
       
    }
}

export default Condition
