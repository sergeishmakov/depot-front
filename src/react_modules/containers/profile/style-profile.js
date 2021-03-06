import styled from "styled-components";
import React from "react";

const value = ({ children, className }) =>
  children ? (
    <h4 className={className}>{children} </h4>
  ) : (
    <h4 className={className}>
      <i>Unspecified</i>{" "}
    </h4>
  );
export const FieldValue = styled(value)`
  color: grey;
`;

export const EditButton = styled.a`
  border-radius: 0.5em;
  border: 0;
  padding: 0 20px 0 20px;
  color: #3790c3;
  font-size: 16pt;
  :hover {
    opacity: 0.5;
  }
  :focus {
    outline: none;
  }
`;

export const Paragraph = styled.p`
  margin: 20px 0 0 0;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
`;

export const ProfileHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  background: white;
  border: 1px solid black;
  margin-top: 40px;
`;
export const Line = styled.div`
  background: red;
  width: 80%;
  height: 20px;
  margin: 10px 0 10px 0;
`;
