import React, {Component} from 'react';
import './App.css';
import ToolBar from '../Components/Toolbar/Toolbar';
import Layout from '../Components/Layout/Layout';

class App extends Component {

  


  
  render(){
  return (
    <div className="App">
     <ToolBar />
     <Layout />
    </div>
  );
  }
}

export default App;
