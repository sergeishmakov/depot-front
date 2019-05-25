import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper, LoginForm } from "./style-login";
import { Form } from "react-final-form";
import { Title, Input, Group, Button } from "../../../style.js";

import { authorizationUser } from "../../actions/usersActions";

class Login extends Component {
  onSubmit = async values => {
    await this.props.authorizationUser(values);
    window.location.reload();
  };
  render() {
    return (
      <Wrapper>
        <Title>Sign In</Title>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, submitting, pristine, invalid }) => (
            <LoginForm onSubmit={handleSubmit}>
              <Group>
                <label>Enter email address:</label>
                <Input
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  maxLength={30}
                  pattern="[a-z]*@[a-z]*\.[a-z]{2,}"
                  patternMismatch="Invalid email"
                />
              </Group>
              <Group>
                <label>Enter your password:</label>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  minLength={4}
                  maxLength={30}
                  tooShort="Password is too short"
                  pattern="[a-z0-9]*"
                  patternMismatch="Invalid password"
                />
              </Group>
              <Button
                type="submit"
                disabled={submitting || pristine || invalid}
              >
                Log In
              </Button>
            </LoginForm>
          )}
        />
      </Wrapper>
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
