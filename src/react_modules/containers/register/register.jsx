import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Title, Input, Group, Button, Label } from "../../../style.js";
import { RegisterForm, Wrapper } from "./style-register.js";
import { addUser } from "../../actions/usersActions";
import { Error } from "../../components/errorfield/errorfield.js";
import { validating } from "../../middlewares/validate";

class Register extends Component {
  onSubmit = async values => {
    await this.props
      .addUser({
        email: values.email,
        password: values.password
      })
      .then(response => {
        if (response) {
          this.props.history.push("/");
        }
      });
  };

  validate = values => {
    validating(values);
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
                    <Input
                      {...input}
                      type="text"
                      placeholder="Username"
                      required
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                    {this.props.users.error && (
                      <Error>{this.props.users.message}</Error>
                    )}
                  </Group>
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <Group>
                    <Label>Enter password:</Label>
                    <Input
                      {...input}
                      type="password"
                      placeholder="Password"
                      required
                    />
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
                      required
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
