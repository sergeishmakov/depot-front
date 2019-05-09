import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Main from '../../components/main/main';

import './register.css';

class Register extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  onChange = e => {
    const {id, value} = e.currentTarget;
    this.setState ({[id]: value});
  };
  render () {
    const {email, password, confirmPassword} = this.state;
    return (
      <Main>
        <h1>Register</h1>
        <div className="register-wrapper">
          <input
            id="email"
            type="text"
            className="register-input"
            placeholder="Enter email addres"
            onChange={this.onChange}
            value={email}
          />
          <input
            id="Password"
            type="password"
            className="register-input"
            placeholder="Enter password"
            onChange={this.onChange}
            value={password}
          />
          <input
            id="password"
            type="text"
            className="register-input"
            placeholder="Enter password again"
            onChange={this.onChange}
            value={confirmPassword}
          />
          <button className="register-button">Register</button>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {};

export default connect (mapStateToProps, mapDispatchToProps) (Register);
