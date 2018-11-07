import React from "react";
import TeeBoxList from "./TeeBoxList.js";

function Course(props) {
    return (
      <div>
        <b>{props.name}, {props.id}</b>
            
        <TeeBoxList id={props.id} name={props.name} teeBoxes={props.teeBoxes}></TeeBoxList> 
      </div>
  
    );
  }

  export default Course;  