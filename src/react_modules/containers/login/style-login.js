import React from "react";
import styled from "styled-components";

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
