import React from "react";
import HoleList from "./HoleList.js";

function TeeBoxList(props) {
  return (
    <div>
      {props.teeBoxes.map(tb => <TeeBox key={tb.id} name={tb.name} slope={tb.slope} rating={tb.rating} holes={tb.holes} />)}
    </div> 
    );
  } 

function TeeBox(props) {
  return (
    <div>
      {props.name}, Slope: {props.slope}, Rating: {props.rating}

      <HoleList id={props.id} holes={props.holes}></HoleList>
    </div>
    );
  }
  
export default TeeBoxList;