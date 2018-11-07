import React from "react";
import LeaderboardDay from "./LeaderboardDay.js";

class LeaderboardRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.position}</td> 
        <td>{this.props.name}</td>
        {this.props.days.map(d => (
          <LeaderboardDay key={d.day} day={d.day} points={d.points} />
          ))
        }
        <td><b>{this.props.points}</b></td>
      </tr>
    );
  }
}

export default LeaderboardRow;
