import React from "react";

// import the Contact component
import Course from "./Course";

function CourseList(props) {
    return (
      <div>
        {props.courses.map(c => <Course key={c.id} id={c.id} name={c.name} teeBoxes={c.teeBoxes} />)}
      </div> 
    ); 
  } 

export default CourseList;