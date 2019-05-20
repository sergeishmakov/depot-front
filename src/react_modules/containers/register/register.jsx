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
    agreeCheck: false
  };
  hundleChange = e => {
    const { password, agreeCheck } = this.state;
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
      this.setState({ agreeCheck: !agreeCheck });
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

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      agreeCheck,
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
          <form>
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className={classNames("form-control", {
                    "is-valid": firstName
                  })}
                  id="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={this.hundleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className={classNames("form-control", {
                    "is-valid": lastName
                  })}
                  id="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={this.hundleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className={classNames(
                      "form-control",
                      { "is-valid": email && isValidEmail },
                      { "is-invalid": (email && !isValidEmail) || users.error }
                    )}
                    id="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend3"
                    onChange={this.hundleChange}
                    required
                  />
                  <div className="invalid-feedback">
                    {!users.error ? "Invalid email address." : users.message}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-middle mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={classNames(
                    "form-control",
                    { "is-valid": password && isValidPassword },
                    {
                      "is-invalid": password && !isValidPassword
                    }
                  )}
                  id="password"
                  placeholder="Password"
                  onChange={this.hundleChange}
                  required
                />
                <div className="invalid-feedback">Invalid password.</div>
              </div>
              <div className="col-md-middle mb-3">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  lassName={classNames(
                    "form-control",
                    { "is-valid": confirmPassword && isValidConfirmPassword },
                    { "is-invalid": confirmPassword && !isValidConfirmPassword }
                  )}
                  id="confirmPassword"
                  placeholder="Password"
                  onChange={this.hundleChange}
                  required
                />
                <div className="invalid-feedback">Passwords do not match.</div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  id="agreeCheck"
                  onChange={this.hundleChange}
                  required
                />
                <label
                  className={classNames(
                    "check-label",
                    { "is-valid": agreeCheck },
                    { "is-invalid": !agreeCheck }
                  )}
                  htmlFor="agreeCheck"
                >
                  Agree to terms and conditions
                </label>
                {!agreeCheck && (
                  <div className="invalid-feedback">
                    You must agree before sign up
                  </div>
                )}
              </div>
            </div>
            <button
              disabled={
                !isValidEmail && !isValidPassword && !isValidConfirmPassword
              }
              className="btn btn-primary _gradient-pink-perple"
              onClick={this.registerUser}
              // type="submit"
            >
              Sign Up
            </button>
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
