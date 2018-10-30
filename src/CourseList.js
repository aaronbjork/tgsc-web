import React from "react";
import PropTypes from "prop-types";
import TeeBoxList from "./TeeBoxList.js";

function CourseList(props) {
    return (
      <div>
        {props.courses.map(c => <Course key={c.id} id={c.id} name={c.name} teeBoxes={c.teeBoxes} />)}
      </div> 
    ); 
  } 

function Course(props) {
  return (
    <div>
      <b>{props.name}, {props.id}</b>

      <TeeBoxList id={props.id} name={props.name} teeBoxes={props.teeBoxes}></TeeBoxList> 
    </div>

  );
}

// Course.PropTypes = {
//   name: PropTypes.string,
// };
  
export default CourseList;