import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './HelloMessage'
import Timer from './Timer'
import Todo from './Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloMessage ferstname ='shin' lastname='yoshikawa'/>
        <Timer />
        <Todo />
      </div>
    );
  }
}


export default App;
