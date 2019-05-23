import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import validator from "validator";
import classNames from "classnames";

import { addUser } from "../../actions/usersActions";

import "./register.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    isValidPassword: false,
    isValidConfirmPassword: false,
    isValidEmail: false,
    agree: false
  };
  hundleChange = e => {
    const { password, agree } = this.state;
    const { id, value } = e.currentTarget;
    if (id !== "agreeCheck") {
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
        case "confirmPassword":
          this.setState({
            isValidConfirmPassword:
              value === password && value.length >= 5 ? true : false
          });
          break;
        default:
          return null;
      }
    } else {
      this.setState({ agree: !agree });
    }
  };
  registerUser = async e => {
    e.preventDefault();
    const { email, lastName, firstName, password } = this.state;
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    this.props.addUser(user).then(response => {
      if (response.created) this.props.history.push("/");
    });
  };
  validate = () => {
    const { isValidEmail, isValidPassword, isValidConfirmPassword, agree } = this.state;
    if(isValidEmail && isValidConfirmPassword && isValidPassword && agree){
      return true;
    }else{
      return false;
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      agree,
      confirmPassword,
      isValidPassword,
      isValidConfirmPassword,
      isValidEmail
    } = this.state;
    const { users } = this.props;
    return (
      <Fragment>
        <div className="register-wrapper">
          <h2 className="_gradient-pink-perple-text">Registration form</h2>
          <form className="register-form" >
            <div className="form-group">
              <label htmlFor="firstName">Enter your first name:</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                className={classNames("form-input", {
                  "_is-valid-input": firstName
                })}
                onChange={this.hundleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Enter your last name:</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                className={classNames("form-input", {
                  "_is-valid-input": lastName
                })}
                onChange={this.hundleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter email address:</label>
              <input
                id="email"
                type="email"
                value={email}
                className={classNames(
                  "form-input",
                  { "_is-valid-input": email && isValidEmail },
                  { "_is-invalid-input": email && !isValidEmail }
                )}
                onChange={this.hundleChange}
              />
              {email && !isValidEmail && (
                <div className="invalid-feedback">Invalid email address</div>
              )}
              {users.error && (
                <div className="invalid-feedback">User already exist!</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter password: </label>
              <input
                id="password"
                type="password"
                value={password}
                className={classNames(
                  "form-input",
                  { "_is-valid-input": password && isValidPassword },
                  { "_is-invalid-input": password && !isValidPassword }
                )}
                onChange={this.hundleChange}
              />
              {password && !isValidPassword && (
                <div className="invalid-feedback">Invalid password</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Enter confirm password:</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                className={classNames(
                  "form-input",
                  {
                    "_is-valid-input": confirmPassword && isValidConfirmPassword
                  },
                  {
                    "_is-invalid-input":
                      confirmPassword && !isValidConfirmPassword
                  }
                )}
                onChange={this.hundleChange}
              />
              {confirmPassword && !isValidConfirmPassword && (
                <div className="invalid-feedback">
                  Passwords is do not match
                </div>
              )}
            </div>
            <div className="form-group">
            <label className = {classNames("check-label", {"_is-valid-text": agree})}><input id ="agreeCheck" onChange={this.hundleChange} type="checkbox"/> I accept the terms of Service</label>
            </div>
            <button disabled ={!this.validate()} className="btn register-btn" onClick={this.registerUser} >Sign Up</button>
          </form>
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
  addUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
