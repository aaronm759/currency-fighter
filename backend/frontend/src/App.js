import React, { Component } from 'react';
import './App.css';
import Background2 from './components/background2';
import Background3 from './components/background3';
import Background4 from './components/background4';
import Foreground from './components/foreground';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="background" id="b1"></div>
        <Background2 />
        <Background4 />
        <Foreground />
      </div>
    );
  }
}



export default App;
