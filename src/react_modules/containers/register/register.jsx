import React, {Component} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';

import './register.css';

import {addUser} from '../../actions/usersActions';
import Main from '../../components/main/main';

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
      <Main>
        <div className="register-wrapper">
          <h2>Registration form</h2>
          <form>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label for="validationServer01">First name</label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer01"
                  placeholder="First name"
                  value="Mark"
                  required
                />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="validationServer02">Last name</label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer02"
                  placeholder="Last name"
                  value="Otto"
                  required
                />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="validationServerUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServerUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend3"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationServer03">City</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer03"
                  placeholder="City"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationServer04">State</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer04"
                  placeholder="State"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationServer05">Zip</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer05"
                  placeholder="Zip"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  id="invalidCheck3"
                  required
                />
                <label className="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
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

const mapDispatchToProps = {
  addUser,
};

export default connect (mapStateToProps, mapDispatchToProps) (Register);
