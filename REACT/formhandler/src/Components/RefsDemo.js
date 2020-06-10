import React from 'react';

class RefsDemo extends React.Component
{  
    constructor(props)
    {
        super(props)
        this.inputref=React.createRef()
        this.Passref=React.createRef()
        this.Callbackref=null
        this.setCallbackref=element=>
        {
            this.Callbackref=element
        }
    }
componentDidMount()
{
     this.inputref.current.focus()
     console.log(this.inputref)
    console.log(this.Passref)

    if(this.Callbackref)
    {
        this.Callbackref.focus()
    }
}
clickhandler=()=>
{
    if(this.inputref.current.value=null)
    {
        this.inputref.current.focus()
    }
    else{
        this.Passref.current.focus()
    }
   alert(`${this.inputref.current.value} and ${this.Passref.current.value}`)
}
   render()
   {
       return (
           <div>
               <h2>the Login form</h2>
               <input type="text" ref={this.inputref} />
               <input type="password" ref={this.Passref}/>
               <input type="text" ref={this.setCallbackref}/>
               <button onClick={this.clickhandler}>Click</button>
           </div>
       )
   }
}
export default RefsDemo;