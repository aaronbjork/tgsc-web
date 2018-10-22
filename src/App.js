import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scorecard from './Scorecard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Scorecard name="Aaron"></Scorecard>
        </header>
      </div>
    );
  }
}

export default App;
