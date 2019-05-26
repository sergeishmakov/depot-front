import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Title, Input, Group, Button, Label } from "../../../style.js";
import { RegisterForm, Wrapper } from "./style-register.js";
import { addUser } from "../../actions/usersActions";
import { Error } from "../../components/errorfield/errorfield.js";

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
      errors.email = "Invalid email address";
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
              <Field name="email">
                {({ input, meta }) => (
                  <Group>
                    <Label>Enter email address:</Label>
                    <Input {...input} type="text" placeholder="Username" />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                    {this.props.users.error && (
                      <span>{this.props.users.message}</span>
                    )}
                  </Group>
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <Group>
                    <Label>Enter password:</Label>
                    <Input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </Group>
                )}
              </Field>

              <Field name="confirm">
                {({ input, meta }) => (
                  <Group>
                    <Label>Enter confirm password:</Label>
                    <Input
                      {...input}
                      type="password"
                      placeholder="Confirm password"
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </Group>
                )}
              </Field>

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
