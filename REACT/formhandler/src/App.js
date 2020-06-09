import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormHandler from './Components/FormHandler';
import Fragement from './Components/Fragement';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div className="App">
     <ParentComp/>
    </div>
  );
}

export default App;
