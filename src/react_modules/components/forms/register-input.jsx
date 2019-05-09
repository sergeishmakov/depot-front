import React from "react";
import PropTypes from "prop-types";

import "./register-input.css";

const RegisterInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
    />
  </div>
);

RegisterInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

RegisterInput.defaultProps = {
  onChange: () => { },
  value: ""
};

export default RegisterInput;