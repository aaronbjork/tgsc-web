import React from "react";
import PropTypes from "prop-types"

function Course(props) {
  return (
    <div>{props.name}</div>
  );
}

Course.propTypes = {
    name: PropTypes.string.isRequired
  };

export default Course;