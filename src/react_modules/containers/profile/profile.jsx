import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Title,
  Blocks,
  FirstBlock,
  SecondBlock,
  AlertInfo
} from "../../../style.js";

import {
  ProfileWrapper,
  Photo,
  ProfileHead,
  EditButton,
  Paragraph,
  FieldValue
} from "./style-profile";

class Profile extends Component {
  check = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address
    } = this.props.users;
    return firstName || lastName || email || phoneNumber || address
      ? true
      : false;
  };

  render() {
    const { users } = this.props;
    return (
      <ProfileWrapper>
        <Blocks>
          <FirstBlock>
            {users.photo ? (
              <img src={users.photo} alt="" />
            ) : (
              <Photo>Not photo</Photo>
            )}
          </FirstBlock>
          <SecondBlock>
            <ProfileHead>
              <Title> Profile</Title>
              <EditButton href="/edit-profile">Edit profile</EditButton>
              <Title />
            </ProfileHead>
            {this.check() && (
              <AlertInfo> Complete the profile completely</AlertInfo>
            )}
            <Paragraph>First Name</Paragraph>
            <FieldValue>{users.firstName}</FieldValue>
            <Paragraph>Last Name</Paragraph>
            <FieldValue>{users.lastName}</FieldValue>
            <Paragraph>Email Address</Paragraph>
            <FieldValue>{users.email} </FieldValue>
            <Paragraph>Phone number</Paragraph>
            <FieldValue>{users.ParagraphhoneNumber}</FieldValue>
            <Paragraph>Address</Paragraph>
            <FieldValue>{users.address}</FieldValue>
          </SecondBlock>
        </Blocks>
      </ProfileWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
