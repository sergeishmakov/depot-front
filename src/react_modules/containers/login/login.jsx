import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import validator from "validator";
import classNames from "classnames";
import "./login.css";

import { authorizationUser } from "../../actions/usersActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isValidEmail: false,
    isValidPassword: false
  };

  onChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
    switch (id) {
      case "email":
        this.setState({
          isValidEmail: validator.isEmail(value) ? true : false
        });
        break;
      case "password":
        this.setState({
          isValidPassword: value.length >= 5 ? true : false
        });
        break;
      default:
        return null;
    }
  };

  userLogin = e => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.authorizationUser(user);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.email) this.props.onClickBackground();
  }

  render() {
    const { email, password, isValidEmail, isValidPassword } = this.state;
    return (
      <Fragment>
        <div className="login-wrapper-border">
          <div className="login-wrapper">
            <h1 className="_gradient-pink-perple-text">Sign In</h1>
            <form className="login-form">
              <div className="form-group ">
                <label htmlFor="email">Enter email address</label>
                <input
                  type="email"
                  className={classNames(
                    "form-input",
                    {
                      "_is-invalid-input":
                        (email && !isValidEmail) ||
                        this.props.users.message === "email"
                    },
                    { "_is-valid-input": email && isValidEmail }
                  )}
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange}
                  required
                />
                {this.props.users.message === "email" && (
                  <div className="invalid-feedback">Invalid email</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Enter password</label>
                <input
                  type="password"
                  className={classNames(
                    "form-input",
                    {
                      "_is-invalid-input":
                        (password && !isValidPassword) ||
                        this.props.users.message === "password"
                    },
                    { "_is-valid-input": password && isValidPassword }
                  )}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                  required
                />
                {this.props.users.message === "password" && (
                  <div className="invalid-feedback">Invalid password</div>
                )}
              </div>

              <div>
                <a href="/forgot">Forgot password?</a>
              </div>

              <button className="btn login-btn" onClick={this.userLogin}>
                Sign In
              </button>

              <p>or Sign In with</p>

              <div className="auth-icons">
                <i className="facebook-icon" />
                <i className="vk-icon" />
              </div>

              <p>If you don't have an account</p>

              <a href="/register">SIGN UP</a>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  authorizationUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
