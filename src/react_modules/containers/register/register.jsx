import React, {Component} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';

import './register.css';

import {addUser} from '../../actions/usersActions';

class Register extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    isValidPassword: false,
    isValidConfirmPassword: false,
    isValidEmail: false,
  };
  onChange = e => {
    const {name, value} = e.currentTarget;
    this.setState ({[name]: value});
    switch (name) {
      case 'email':
        this.setState ({
          isValidEmail: validator.isEmail (value) ? true : false,
        });
        break;
      case 'password':
        this.setState ({
          isValidPassword: value.length >= 5 ? true : false,
        });
        break;
      case 'confirmPassword':
        this.setState ({
          isValidConfirmPassword: value === this.state.password &&
            value.length >= 5
            ? true
            : false,
        });
        break;
      default:
        return null;
    }
  };
  registerUser = async () => {
    const {email, lastName, firstName, password} = this.state;
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    this.props.addUser (user);
  };
  componentWillReceiveProps (nextProps) {
    if (nextProps.users.email) this.props.history.push ('/');
  }

  render () {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      isValidPassword,
      isValidConfirmPassword,
      isValidEmail,
    } = this.state;
    return (
      <div className="register-wrapper">
        <h2>Registration form</h2>
        {this.props.users.error &&
          <p className="error">{this.props.users.message} </p>}
        <div className="form-wrapper">
          <label htmlFor="firstName">Enter your first name:</label>
          <div className="input-wrapper">
            <input
              name="firstName"
              className="register-input"
              type="text"
              value={firstName}
              onChange={this.onChange}
              placeholder="First name"
            />
          </div>
          <label htmlFor="lastName">Enter your last name:</label>
          <div className="input-wrapper">
            <input
              name="lastName"
              className="register-input"
              type="text"
              value={lastName}
              onChange={this.onChange}
              placeholder="Last name"
            />

          </div>
          <label htmlFor="email">Enter your email address:</label>
          <div className="input-wrapper">
            {!isValidEmail &&
              email &&
              <p className="error">Invalid email address</p>}
            <input
              name="email"
              className="register-input"
              type="text"
              value={email}
              onChange={this.onChange}
              placeholder="Email"
            />

          </div>
          <label htmlFor="password">Enter your password:</label>
          <div className="input-wrapper">
            {!isValidPassword &&
              password &&
              <p className="error">Password is too short</p>}
            <input
              name="password"
              className="register-input"
              type="password"
              value={password}
              onChange={this.onChange}
              placeholder="Password"
            />
          </div>
          <label htmlFor="confirmPassword">Enter password again:</label>
          <div className="input-wrapper">
            {!isValidConfirmPassword &&
              confirmPassword &&
              <p className="error">Passwords do not match</p>}
            <input
              name="confirmPassword"
              className="register-input"
              type="password"
              value={confirmPassword}
              onChange={this.onChange}
              placeholder="Confirm password"
            />
          </div>

        </div>
        <button
          disabled={
            !isValidEmail && !isValidPassword && !isValidConfirmPassword
          }
          className="register-button"
          onClick={this.registerUser}
        >
          Register
        </button>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  addUser,
};

export default connect (mapStateToProps, mapDispatchToProps) (Register);
