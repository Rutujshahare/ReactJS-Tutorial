import React from 'react';

class Message extends React.Component
{
    constructor()
    {
        super()
        this.state={message:'welcome the visitors to this channnel'}
    }
    changeMessage()
    {
        alert("thank you for the subscribing");
    }
  render()
  {
      return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
      )
  }
  
}
export default Message;