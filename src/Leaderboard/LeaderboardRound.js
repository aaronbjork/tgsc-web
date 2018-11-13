import React from "react";

class LeaderboardRound extends React.Component {
  render() {
    return (
      <td>{this.props.points}</td>
    );
  }
}

export default LeaderboardRound;
