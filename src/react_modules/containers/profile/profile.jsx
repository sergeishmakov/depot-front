import React, { Component, Fragment } from "react";
import { Title, Input, Group, Button, Label } from "../../../style.js";
import {
  ProfileWrapper,
  Blocks,
  FirstBlock,
  SecondBlock,
  Photo,
  Line,
  ProfileHead,
  EditButton
} from "./style-profile";

class Profile extends Component {
  render() {
    return (
      <ProfileWrapper>
        <ProfileHead>
          <Title />
          <Title> Profile</Title>
          <EditButton href="/edit-profile">Edit profile</EditButton>
        </ProfileHead>
        <Blocks>
          <FirstBlock>
            <Photo />
          </FirstBlock>
          <SecondBlock>
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
          </SecondBlock>
        </Blocks>
      </ProfileWrapper>
    );
  }
}
export default Profile;
