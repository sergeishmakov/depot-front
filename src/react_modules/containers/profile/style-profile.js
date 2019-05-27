import styled from "styled-components";
import React from "react";
import { Title, Button } from "../../../style.js";

export const EditButton = styled.a`
  border-radius: 0.5em;
  background: #3790c3;
  border: 0;
  padding: 0 20px 0 20px;
  color: white;
  font-size: 16pt;
  :hover {
    text-decoration: none;
    color: white;
    opacity: 0.5;
  }
  :focus {
    outline: none;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
`;

export const ProfileHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Blocks = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const FirstBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0 0 0;
  width: 50%;
`;
export const SecondBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0 0 0;
  width: 50%;
`;
export const Photo = styled.img`
  width: 100px;
  height: 100px;
  background: red;
`;
export const Line = styled.div`
  background: red;
  width: 80%;
  height: 20px;
  margin: 10px 0 10px 0;
`;
