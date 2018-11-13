import React from "react";
import LeaderboardRound from "./LeaderboardRound.js";

class LeaderboardRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.position}</td> 
        <td>{this.props.name}</td>
        {this.props.days.map(d => (
          <LeaderboardRound key={d.day} 
                  day={d.day} 
                  points={d.points} />
          ))
        }
        <td><b>{this.props.points}</b></td>
      </tr>
    );
  }
}

export default LeaderboardRow;
