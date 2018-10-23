import React, { Component } from 'react';
import './Scorecard.css';

class Scorecard extends Component {
  render() {
    return (
      <div className="Scorecard">
        {this.state.greeting} {this.props.name} {this.state.greeting}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { greeting: '* ' };

  }

  async componentDidMount() {
    const url = "https://tgsc-api.azurewebsites.net/api/values";  // https://topgunapi.azurewebsites.net/api/course/6, https://randomuser.me/api/?results=2
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
      

  }
}



export default Scorecard;

