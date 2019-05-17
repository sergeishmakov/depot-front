import React from 'react';
import './main.css';

const RegisterInput = (name, type, value, onChange, placeholder) => (
  <div className="register-input-wrapper">
    <label className="register-form__label" htmlFor="firstName">
      Enter your first name:
    </label>
    <input
      className="register-form__label"
      name={name}
      type={type}
      value={value}
      onChange={() => onChange (name, value)}
      placeholder={placeholder}
    />
  </div>
);

export default RegisterInput;
