import React, { Component, Fragment } from "react";
import {
  Wrapper,
  Blocks,
  FirstBlock,
  SecondBlock,
  Photo,
  Line,
  ProfileHead,
  Title,
  EditButton
} from "./style-profile";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <ProfileHead>
            <Title> Profile</Title>
            <EditButton href="/edit-profile">Edit</EditButton>
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
        </Wrapper>
      </Fragment>
    );
  }
}
export default Profile;
