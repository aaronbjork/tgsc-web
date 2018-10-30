import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import CourseList from "./CourseList";


class App extends Component {

  state = {
    courses: []
  };

  componentDidMount() {
    axios
      .get("https://tgsc-api.azurewebsites.net/api/course")
      .then(response => {

        // create an array of courses only with relevant data
        const newCourses = response.data.map(c => {
          return {
            id: c.id,
            name: c.name,
            teeBoxes: c.teeBoxes
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          courses: newCourses
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CourseList courses={this.state.courses} />
        </header>

      </div>
    );
  }
}

export default App;
