import React from "react";
import PropTypes from "prop-types"

function TeeBox(props) {
  return (
    <div>
      {props.name}, Ydg: {props.yardage}
    </div>

  );
}

TeeBox.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    yardage: PropTypes.number
  };

export default TeeBox;