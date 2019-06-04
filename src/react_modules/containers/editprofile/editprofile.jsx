import React, { Component } from "react";
import { Wrapper, EditedForm } from "./style-editprofile";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import {
  Title,
  Blocks,
  FirstBlock,
  SecondBlock,
  AlertSuccess,
  Input,
  Group,
  Button,
  Label
} from "../../../style.js";
import { saveChanges } from "../../actions/usersActions";
import { Error } from "../../components/errorfield/errorfield.js";
import { validating } from "../../middlewares/validate";
import { Photo } from "../profile/style-profile";
class EditProfile extends Component {
  onSubmit = async values => {
    let data = values;
    data.id = this.props.users.id;
    await this.props.saveChanges(data).then(response => {
      if (response) {
        this.props.history.push("/");
      }
    });
  };

  validate = values => {
    validating(values);
  };
  render() {
    const { users } = this.props;
    return (
      <Wrapper>
        <Blocks>
          <FirstBlock>
            {users.photo ? (
              <img src={users.photo} alt="" />
            ) : (
              <Photo>Not photo</Photo>
            )}
          </FirstBlock>
          <SecondBlock>
            <Title>Edit profile</Title>
            <AlertSuccess> Changes successfully applied</AlertSuccess>
            <Form
              onSubmit={this.onSubmit}
              validate={this.validate}
              initialValues={{
                lastName: users.lastName,
                firstName: users.firstName,
                email: users.email,
                phoneNumber: users.phoneNumber,
                address: users.address
              }}
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
                <EditedForm onSubmit={handleSubmit}>
                  <Field name="firstName">
                    {({ input, meta }) => (
                      <Group>
                        <Label>First name:</Label>
                        <Input
                          {...input}
                          type="text"
                          placeholder="example: Bean"
                        />
                        {meta.error && meta.touched && (
                          <Error>{meta.error}</Error>
                        )}
                      </Group>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <Group>
                        <Label>Last Name:</Label>
                        <Input
                          {...input}
                          type="text"
                          placeholder="example: Green"
                        />
                        {meta.error && meta.touched && (
                          <Error>{meta.error}</Error>
                        )}
                      </Group>
                    )}
                  </Field>
                  {/* <Field name="email">
                    {({ input, meta }) => (
                      <Group>
                        <Label>Email address:</Label>
                        <Input
                          {...input}
                          type="text"
                          placeholder="example: bean.green@example.com"
                        />
                        {meta.error && meta.touched && (
                          <Error>{meta.error}</Error>
                        )}
                        {this.props.users.error && (
                          <Error>{this.props.users.message}</Error>
                        )}
                      </Group>
                    )}
                  </Field> */}
                  <Field name="phoneNumber">
                    {({ input, meta }) => (
                      <Group>
                        <Label>Phone number:</Label>
                        <Input
                          {...input}
                          type="text"
                          placeholder="example: +7 999 888 77 66"
                        />
                        {meta.error && meta.touched && (
                          <Error>{meta.error}</Error>
                        )}
                      </Group>
                    )}
                  </Field>
                  <Field name="address">
                    {({ input, meta }) => (
                      <Group>
                        <Label>Address:</Label>
                        <Input
                          {...input}
                          type="text"
                          placeholder="example: USA, Washington, Pod street, Green Hause "
                        />
                        {meta.error && meta.touched && (
                          <Error>{meta.error}</Error>
                        )}
                      </Group>
                    )}
                  </Field>
                  <br />
                  <Button type="submit" disabled={submitting || invalid}>
                    Save changes
                  </Button>
                </EditedForm>
              )}
            />
          </SecondBlock>
        </Blocks>{" "}
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
  saveChanges
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
