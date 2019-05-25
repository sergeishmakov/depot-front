import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0 30px 0;
`;

const loginform = ({ onSubmit, children, className }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);
export const LoginForm = styled(loginform)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
