import React, {Component, Fragment} from 'react';
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
    agreeCheck: false,
  };
  onChange = e => {
    const {id, value} = e.currentTarget;
    if (id !== 'agreeCheck') {
      this.setState ({[id]: value});
      switch (id) {
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
    } else {
      this.setState ({agreeCheck: !this.state.agreeCheck});
    }
  };
  registerUser = async e => {
    e.preventDefault ();
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
      agreeCheck,
      confirmPassword,
      isValidPassword,
      isValidConfirmPassword,
      isValidEmail,
    } = this.state;
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
                  className={
                    firstName ? 'form-control is-valid' : 'form-control'
                  }
                  id="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={this.onChange}
                  required
                />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className={
                    lastName ? 'form-control is-valid' : 'form-control'
                  }
                  id="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={this.onChange}
                  required
                />
                <div className="valid-feedback">
                  Looks good!
                </div>
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
                    className={
                      email
                        ? !isValidEmail
                            ? 'form-control is-invalid'
                            : this.props.users.error
                                ? 'form-control is-invalid'
                                : 'form-control is-valid'
                        : 'form-control'
                    }
                    id="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend3"
                    onChange={this.onChange}
                    required
                  />
                  {!this.props.users.error
                    ? <div className="invalid-feedback">
                        Invalid email address.
                      </div>
                    : <div className="invalid-feedback">
                        {this.props.users.message}
                      </div>}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-middle mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={
                    password
                      ? !isValidPassword
                          ? 'form-control is-invalid'
                          : 'form-control is-valid'
                      : 'form-control'
                  }
                  id="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <div className="invalid-feedback">
                  Invalid password.
                </div>
              </div>
              <div className="col-md-middle mb-3">
                <label htmlFor="confirmPassword">
                  Confirm password
                </label>
                <input
                  type="password"
                  className={
                    confirmPassword
                      ? !isValidConfirmPassword
                          ? 'form-control is-invalid'
                          : 'form-control is-valid'
                      : 'form-control'
                  }
                  id="confirmPassword"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <div className="invalid-feedback">
                  Passwords do not match.
                </div>
              </div>

            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  id="agreeCheck"
                  onChange={this.onChange}
                  required
                />
                <label
                  className={
                    agreeCheck
                      ? 'check-label-is-valid'
                      : 'check-label-is-invalid'
                  }
                  htmlFor="agreeCheck"
                >
                  Agree to terms and conditions
                </label>
                {!agreeCheck &&
                  <div className="invalid-feedback">
                    You must agree before sign up
                  </div>}
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
    users: state.users,
  };
};

const mapDispatchToProps = {
  addUser,
};

export default connect (mapStateToProps, mapDispatchToProps) (Register);
