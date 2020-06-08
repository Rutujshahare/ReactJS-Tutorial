import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props)
     {
         super(props)
         this.state=
         {
           isLoggedIn:true
         }
     }
    render() {


        return(
            this.state.isLoggedIn?
            <div>welcome rutuj shahare</div>:
            <div>welcome to the guest Login </div>
        )
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     message=
        //         <div>welcome rutuj shahare</div>
            
        // }
        // else
        // {
        //     message=
        //         <div>welcome Guest</div>
            
        // }
       
       // return (
           // <div>
               // welcome rutuj shahare

               // <div>welcome guest</div>
            //</div>
       // )
    }
}

export default UserGreeting;
