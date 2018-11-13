import React, { Component } from 'react';
import './App.css';
import Leaderboard from "./Leaderboard/Leaderboard.js";
import Scorecard from "./Scorecard/Scorecard.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Scorecard roundid="2911" />
          <Leaderboard />
        </header>
      </div>
    );
  }
}

export default App;
