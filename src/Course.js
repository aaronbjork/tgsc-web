import React from "react";
import PropTypes from "prop-types"
import TeeBox from "./TeeBox.js";

function Course(props) {
  return (
    <div>
      <b>{props.name}, {props.id}</b>

      
    </div>

  );
}

Course.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    teeBoxes: PropTypes.array
  };

export default Course;