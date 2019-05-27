import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginForm } from "./style-login";
import { Form } from "react-final-form";

import { Title, Input, Group, Button, Wrapper, Label } from "../../../style.js";
import { Error } from "../../components/errorfield/errorfield.js";
import { authorizationUser } from "../../actions/usersActions";

class Login extends Component {
  onSubmit = async values => {
    await this.props.authorizationUser(values).then(response => {
      if (response.user) {
        window.location.href.split("/").pop() === "register"
          ? this.props.history.push("/")
          : this.props.handleClose();
      }
    });
  };
  render() {
    const { users } = this.props;
    return (
      <Wrapper>
        <Title>Sign In</Title>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, submitting, pristine, invalid }) => (
            <LoginForm onSubmit={handleSubmit}>
              <Group>
                <Label>Enter email address:</Label>
                <Input
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  maxLength={30}
                  pattern="[a-z]*@[a-z]*\.[a-z]{2,}"
                  patternMismatch="Invalid email"
                />
                {console.log(users.user, " rrrrrrrrr", users.message)}
                {!users.user && users.message === "email" && (
                  <Error>User does not exist</Error>
                )}
              </Group>
              <Group>
                <Label>Enter your password:</Label>
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
                {!users.user && users.message === "password" && (
                  <Error>Wrong password</Error>
                )}
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
