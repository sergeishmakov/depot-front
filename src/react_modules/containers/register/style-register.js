import React from "react";
import styled from "styled-components";

const registerform = ({ onSubmit, children, className }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);
export const RegisterForm = styled(registerform)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding: 0 0 30px 0;
`;
