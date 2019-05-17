import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import './login.css';

import {autenticateUser} from '../../actions/usersActions';
import Main from '../../components/main/main';
import Header from '../../components/header/header';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isValidEmail: false,
    isValidPassword: false,
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
      default:
        return null;
    }
  };

  userLogin = async () => {
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    await autenticateUser (user);
  };

  render () {
    const {email, password, isValidEmail, isValidPassword} = this.state;
    return (
      <Fragment>
        <Header />
        <Main>
          <div className="login-wrapper">
            <h1>Logining</h1>
            <div className="login-form">
              <div className="input-wrapper">
                <input
                  name="email"
                  value={email}
                  className="input-login"
                  type="text"
                  placeholder="Enter email address"
                  onChange={this.onChange}
                />
                {!isValidEmail &&
                  email &&
                  <p className="login-error"> Invalid email address</p>}
              </div>

              <div className="input-wrapper">
                <input
                  name="password"
                  value={password}
                  className="input-login"
                  type="password"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                />
                {!isValidPassword &&
                  password &&
                  <p className="login-error"> Invalid password</p>}
              </div>
              <button
                disabled={!isValidEmail && !isValidPassword}
                className="login-buttom"
                onClick={this.userLogin}
              >
                Log in
              </button>
            </div>
          </div>
        </Main>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  autenticateUser,
};

export default connect (mapStateToProps, mapDispatchToProps) (Login);
