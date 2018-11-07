import React from "react";
import axios from "axios";
import LeaderboardRow from "./LeaderboardRow.js";
import LeaderboardRowHdr from "./LeaderboardRowHdr.js";

class Leaderboard extends React.Component {
  state = {
    rows: [],
    days: []
  };

  componentDidMount() {
    axios
      .get("https://tgsc-api.azurewebsites.net/api/event/13/leaderboard")
      .then(response => {

        // Create an array with only the data we need for 
        // the LeaderboardRow objects.
        const rowsList = response.data.rows.map(r => {
          return {
            id: r.playerId,
            name: r.playerName,
            position: r.position,
            points: r.points,
            days: r.days
          };
        });

        // Get the days value from our response.
        const days = [];
        for (var i = 1; i < response.data.days + 1; i++)
        {
          days.push({ day: i, label: "Round " + i} );
        }

        // Debug console output
        //console.log(rowsList);
        console.log("days: " + days);

        // Create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          rows: rowsList, days: days
        });

        // Store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        There were  days in this tournament.
        <table>
          <tbody>
            <tr>
              <th>Pos</th>
              <th>Name</th>
              {this.state.days.map(d => (
                <LeaderboardRowHdr key={d.day} name={d.label}  />
                ))
              }             

              <th>Total</th>
            </tr>
              {this.state.rows.map(r => (
                <LeaderboardRow key={r.id} name={r.name} position={r.position} points={r.points} days={r.days} />
                ))
              }
          </tbody>
        </table>
      </div> 
    );
  }

  renderHeader(cols) {
      for (var i = 1; i < cols + 1; i++) {
        return (
          <td>{i}</td>
        )
      }                 
  }
}

export default Leaderboard;

// Great docs here: https://jjude.com/react-array/