import React from "react";
import Course from "./Course.js";

function CourseList(props) {
    return (
      <div>
        {props.courses.map(c => <Course key={c.id} id={c.id} name={c.name} teeBoxes={c.teeBoxes} />)}
      </div> 
    ); 
  } 


// Course.PropTypes = {
//   name: PropTypes.string,
// };
  
export default CourseList;