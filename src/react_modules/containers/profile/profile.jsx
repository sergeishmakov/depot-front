import React, { Component, Fragment } from "react";
import { Title } from "../../../style.js";
import {
  Wrapper,
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
      <Fragment>
        <Wrapper>
          <ProfileHead>
            <Title />
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
