import React from 'react';
import ReactDom from 'react-dom';

class Counter extends React.Component
{
   constructor(props)
   {
       super(props)
       this.state=
       {
           count:0
       }
       
   }
   increment()
       {
           this.setState(
               {
                   count:this.state.count+1*2
               },
               ()=>
               {
                   console.log('callback value',this.state.count);
               }
           )
           console.log(this.state.count);     
          };
          
          
incrementfive()
{
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
}


    render()
    {
        return (
            <div>counter of the number -{this.state.count}
            <div>
                <button onClick={()=>this.incrementfive()}>Increment of the double of that </button>
                </div>
                </div>
         )
    }
}
export default Counter;