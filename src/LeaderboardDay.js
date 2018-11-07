import React from "react";

class LeaderboardDay extends React.Component {
  render() {
    return (
      <td>{this.props.points}</td>
    );
  }
}

export default LeaderboardDay;
