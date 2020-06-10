import React from 'react';
import Input from './Input';

export default class FormInput extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [
                    {
                      "id": 1,
                      "name": "Leanne Graham",
                      "username": "Bret",
                      "email": "Sincere@april.biz",
                      "phone": "1-770-736-8031 x56442",
                      "website": "hildegard.org",
                    },
                    {
                        "id": 2,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                      }]
        }
        
        this.componentRef=React.createRef();

        this.clickhandler = this.clickhandler.bind(this);
        
    }
    clickhandler(){
        // this.componentRef.current.focus()
        console.log(this.state.data)
    }
    // clickhandler = () =>{
    //     this.componentRef.current.focus()
    // }
    render(){
        return (
            <div>
             <Input  ref={this.componentRef}/>
             <button onClick={this.clickhandler} >FormInput</button>
             <div>
                 {<MadData data={this.state.data}/>}
             </div>
            </div>
        )
    }
}

function MadData(props){
    
    return(
       
       props.data.map(d =>{
           console.log(d)
           console.log(d.name)
           console.log(d.phone)
           console.log(d.username)
       })
     
    )
}
// export default FormInput