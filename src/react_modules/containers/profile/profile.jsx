import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Title,
  Blocks,
  FirstBlock,
  SecondBlock,
  AlertInfo
} from "../../../style.js";

import { PhotoWrap, NotPhoto, Photo } from "../editprofile/style-editprofile";
import {
  ProfileWrapper,
  ProfileHead,
  EditButton,
  Paragraph,
  FieldValue
} from "./style-profile";

class Profile extends Component {
  state = {
    localPhoto: ""
  };
  check = () => {
    const { firstName, lastName, phoneNumber, address } = this.props.users;
    return firstName && lastName && phoneNumber && address ? false : true;
  };

  render() {
    const { users } = this.props;
    return (
      <ProfileWrapper>
        <Blocks>
          <FirstBlock>
            <PhotoWrap>
              {users.photo ? (
                <Photo src={users.photo} alt="Not photo" />
              ) : (
                <NotPhoto>Not photo</NotPhoto>
              )}
            </PhotoWrap>
          </FirstBlock>
          <SecondBlock>
            <ProfileHead>
              <Title> Profile</Title>
              <EditButton href="/depot/edit-profile">Edit profile</EditButton>
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
            <FieldValue>{users.phoneNumber}</FieldValue>
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
