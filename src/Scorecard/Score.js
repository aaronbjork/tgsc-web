import React from "react";

class Score extends React.Component {
  render() {
    return (
      <td>{this.props.score}</td>
    );
  }
}

export default Score;
