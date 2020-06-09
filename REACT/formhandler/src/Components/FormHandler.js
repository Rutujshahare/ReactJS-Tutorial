import React from 'react';

class FormHandler extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            username:'',
            password:'',
            usertype:''
        }
    }
    UsernameChange=(event)=>
    {
      this.setState(
          {
              username:event.target.value
          }
      )
    }
PasswordChange=(event)=>
{
  this.setState(
      {
          password:event.target.value
      }
  )
}
UsertypeChange=(event)=>
{
    this.setState(
        {
   usertype:event.target.value
        }
   )

}
SubmitChange=event=>
{
    alert(`${this.state.username} and ${this.state.password} and ${this.state.usertype} `)
  
}

  render()
  {
      return (
          <form onSubmit={this.SubmitChange}>
          <div>
             <label>Username</label>
             <input type="text"  value={this.state.username} onChange={this.UsernameChange}/> 
          </div>
          <div>
              <label>Password</label>
              <input type="password" value={this.state.password} onChange={this.PasswordChange}/>
          </div>
          <div>
              <label>usertype</label>
              <select value={this.state.usertype} onChange={this.UsertypeChange}>
            <option value="Regular">Regular</option>
            <option value="Admin">Admin</option>
            <option value="other">other</option>
              </select>
          </div>
          <div>
              <button type="submit" > submit</button>
          </div>
          </form>
      )
  }
}
export default FormHandler