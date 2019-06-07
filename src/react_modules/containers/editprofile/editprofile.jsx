import React, { Component } from "react";
import {
  Wrapper,
  EditedForm,
  Photo,
  PhotoWrap,
  FileInput,
  NotPhoto
} from "./style-editprofile";
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
  Label,
  EmptyAlert
} from "../../../style.js";
import { saveChanges } from "../../actions/usersActions";
import { Error } from "../../components/errorfield/errorfield.js";
import { validating } from "../../middlewares/validate";
class EditProfile extends Component {
  state = {
    statusUpdate: false,
    localPhoto: "",
    localPhotoName: ""
  };
  onSubmit = async values => {
    let data = values;
    data.id = this.props.users.id;
    if (this.state.localPhoto) {
      data.localPhoto = this.state.localPhoto;
      data.localPhotoName = this.state.localPhotoName;
    }
    await this.props.saveChanges(data).then(response => {
      this.setState({ statusUpdate: response });
    });
  };
  onChange = () => {
    this.setState({ statusUpdate: false });
  };
  handleLoadImage = e => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onload = (() => {
      return e => {
        this.setState({
          localPhoto: e.target.result,
          localPhotoName: file.name
        });
      };
    })(file);
    reader.readAsDataURL(file);
  };
  validate = values => {
    validating(values);
  };
  render() {
    const { users } = this.props;
    const { statusUpdate, localPhoto } = this.state;
    return (
      <Wrapper>
        <Blocks>
          <FirstBlock>
            <PhotoWrap>
              {users.photo || localPhoto ? (
                <Photo src={users.photo || localPhoto} alt="Not photo" />
              ) : (
                <NotPhoto>Not photo</NotPhoto>
              )}
            </PhotoWrap>
            <FileInput
              type="file"
              onChange={this.handleLoadImage}
              accept="image/*"
            />
          </FirstBlock>
          <SecondBlock>
            <Title>Edit profile</Title>
            {statusUpdate ? (
              <AlertSuccess> Changes successfully applied</AlertSuccess>
            ) : (
              <EmptyAlert>Empty</EmptyAlert>
            )}
            <Form
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              validate={this.validate}
              initialValues={{
                lastName: users.lastName,
                firstName: users.firstName,
                phoneNumber: users.phoneNumber,
                address: users.address
              }}
              render={({
                onChange,
                handleSubmit,
                form,
                submitting,
                pristine,
                validating,
                values,
                valid,
                invalid
              }) => (
                <EditedForm onSubmit={handleSubmit} onChange={onChange}>
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
