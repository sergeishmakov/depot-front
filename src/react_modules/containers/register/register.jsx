import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Title, Input, Group, Button } from "../../../style.js";
import { RegisterForm, Wrapper } from "./style-register.js";
import { addUser } from "../../actions/usersActions";

class Register extends Component {
  onSubmit = async values => {
    await this.props
      .addUser({
        email: values.email,
        password: values.password
      })
      .then(response => {
        if (response) {
          this.props.push("/");
        }
      });
  };
  validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
      errors.email = "invalid email";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if ((values.password || []).length < 5) {
      errors.password = "Password is too short";
    }
    if (!values.confirm) {
      errors.confirm = "Required";
    }
    if (values.confirm !== values.password) {
      errors.confirm = "Does not match";
    }
    return Object.keys(errors).length ? errors : "";
  };

  render() {
    return (
      <Wrapper>
        <Title>Sign Up</Title>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            validating,
            values,
            valid,
            invalid
          }) => (
            <RegisterForm onSubmit={handleSubmit}>
              <Group>
                <label>Enter email address:</label>
                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <Input {...input} type="text" placeholder="Username" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                      {this.props.users.error && (
                        <span>{this.props.users.message}</span>
                      )}
                    </div>
                  )}
                </Field>
              </Group>
              <Group>
                <label>Enter password:</label>
                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <Input
                        {...input}
                        type="password"
                        placeholder="Password"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </Group>

              <Group>
                <label>Enter confirm password:</label>
                <Field name="confirm">
                  {({ input, meta }) => (
                    <div>
                      <Input
                        {...input}
                        type="password"
                        placeholder="Confirm password"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </Group>

              <Button type="submit" disabled={submitting || invalid}>
                Sign Up
              </Button>
            </RegisterForm>
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
  addUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
