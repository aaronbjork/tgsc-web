import React from "react";

function HoleList(props) {
    return (
      <div>
        {props.holes.map(h => <Hole key={h.id} id={h.id} number={h.number} yardage={h.yardage} />)}
      </div> 
    ); 
  } 

function Hole(props) {
  return (
    <div>
      <b>{props.number}, {props.yardage}</b>
    </div>

  );
}
  
export default HoleList;