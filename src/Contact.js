import React from "react";
import PropTypes from "prop-types"

function Contact(props) {
  return (
    <div>{props.email}</div>
  );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired
  };

export default Contact;