import React from 'react ';

class RegularComp extends React.Component
{
   render()
   {
       return (
           <div>
               <h2>this is a regular component {this.props.name}</h2>
           </div>
       )
   }
}
export default RegularComp;