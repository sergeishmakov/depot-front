import React from "react";
import styled from "styled-components";

const form = ({ onSubmit, children, className }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);
export const FormWrapper = styled(form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
