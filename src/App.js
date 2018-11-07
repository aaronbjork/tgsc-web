import React, { Component } from 'react';
import './App.css';
import Leaderboard from "./Leaderboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Leaderboard />
        </header>
      </div>
    );
  }
}

export default App;
