import React from "react";
import axios from "axios";
import Number from "./Number.js";
import Yardage from "./Yardage.js";
import Handicap from "./Handicap.js";
import Par from "./Par.js";
import Score from "./Score.js";
import Points from "./Points.js";

class Scorecard extends React.Component {
  state = {
    player: null,
    date: null,
    score: null,
    scoreOut: null,
    scoreIn: null,
    points: null,
    pointsOut: null,
    pointsIn: null,
    holes: [],
  };

  componentDidMount() {
    axios
      .get("https://tgsc-api.azurewebsites.net/api/rounds/" + this.props.roundid)
      .then(response => {
        // Create an array with only the data we need for 
        // the LeaderboardRow objects.
        const holeList = response.data.holeScores.map(hs => {
          return {
            number: hs.number,
            yardage: hs.yardage,
            handicap: hs.handicap,
            par: hs.par,
            score: hs.score,
            points: hs.points,
          };
        });

        // Get the days value from our response.
        const player = response.data.playerName;
        const date = response.data.date;
        const score = response.data.score;
        const scoreOut = response.data.scoreOut;
        const scoreIn = response.data.scoreIn;
        const points = response.data.points;
        const pointsOut = response.data.pointsOut;
        const pointsIn = response.data.pointsIn;

        // Debug console output
        console.log(holeList);

        // Create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          player: player, 
          date: date,
          holes: holeList,
          score: score,
          scoreOut: scoreOut,
          scoreIn: scoreIn,
          points: points,
          pointsOut: pointsOut,
          pointsIn: pointsIn
        });

        // Store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        Scorecard for round { this.props.roundid }
        <table>
          <tbody>
            <tr>              
              <th>Hole</th>
              {this.state.holes.filter(h => h.number < 10).map(h => (
                <Number key={h.id} number={h.number}  />
                ))
              }
              <th>OUT</th>            
              {this.state.holes.filter(h => h.number > 9).map(h => (
                <Number key={h.id} number={h.number}  />
                ))
              }
              <th>IN</th>            
              <th>TOTAL</th>            
            </tr>
            <tr>              
              <td>Yardage</td>
              {this.state.holes.filter(h => h.number < 10).map(h => (
                <Yardage key={h.id} yardage={h.yardage}  />
                ))
              }
              <td></td>             
              {this.state.holes.filter(h => h.number > 9).map(h => (
                <Yardage key={h.id} yardage={h.yardage}  />
                ))
              }
              <td></td>             
              <td></td>             
            </tr>
            <tr>              
              <td>Handicap</td>
              {this.state.holes.filter(h => h.number < 10).map(h => (
                <Handicap key={h.id} handicap={h.handicap}  />
                ))
              }             
              <td></td>             
              {this.state.holes.filter(h => h.number > 9).map(h => (
                <Handicap key={h.id} handicap={h.handicap}  />
                ))
              }             
              <td></td>             
              <td></td>             
            </tr>
            <tr>              
              <td>Par</td>
              {this.state.holes.filter(h => h.number < 10).map(h => (
                <Par key={h.id} par={h.par}  />
                ))
              }             
              <td></td>             
              {this.state.holes.filter(h => h.number > 9).map(h => (
                <Par key={h.id} par={h.par}  />
                ))
              }             
              <td></td>             
              <td></td>             
            </tr>
            <tr>              
              <td>{ this.state.player }</td>
              {this.state.holes.filter(h => h.number < 10).map(h => (
                <Score key={h.id} score={h.score}  />
                ))
              }             
              <td>{this.state.scoreOut}</td>             
              {this.state.holes.filter(h => h.number > 9).map(h => (
                <Score key={h.id} score={h.score}  />
                ))
              }             
              <td>{this.state.scoreIn}</td>             
              <td>{this.state.score}</td>             
            </tr>
            <tr>              
              <td>Points</td> 
              {this.state.holes.filter(h => h.number < 10).map(h => (
                <Points key={h.id} points={h.points}  />
                ))
              }             
              <td>{this.state.pointsOut}</td>             
              {this.state.holes.filter(h => h.number > 9).map(h => (
                <Points key={h.id} points={h.points}  />
                ))
              }             
              <td>{this.state.pointsIn}</td>             
              <td>{this.state.points}</td>             
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Scorecard;

// Great docs here: https://jjude.com/react-array/