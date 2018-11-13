import React from "react";

class Number extends React.Component {
  render() {
    return (
      <th>{this.props.number}</th>
    );
  }
}

export default Number;
