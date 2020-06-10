import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormHandler from './Components/FormHandler';
import Fragement from './Components/Fragement';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FormInput from './Components/FormInput';
import TextField from './Components/TextField';
import ForwardParentRef from './Components/ForwardParentRef';


function App() {
  return (
    <div className="App">
     <ForwardParentRef/>
    </div>
  );
}

export default App;
