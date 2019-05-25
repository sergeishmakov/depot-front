import styled from "styled-components";
import React from "react";
import { Field } from "react-final-form-html5-validation";

export const Title = styled.h1`
  background: linear-gradient(0.25turn, #3790c3, #3790c3);
  -webkit-background-clip: text;
  color: transparent;
  margin: 20px 0 20px 0;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;
const input = ({
  className,
  name,
  type,
  placeholder,
  maxLength,
  minLength,
  pattern,
  patternMismatch,
  tooShort
}) => (
  <Field
    className={className}
    name={name}
    component="input"
    type={type}
    placeholder={placeholder}
    required
    maxLength={maxLength}
    minLength={minLength}
    pattern={pattern}
    patternMismatch={patternMismatch}
    tooShort={tooShort}
  />
);
export const Input = styled(input)`
  outline: none;
  background: transparant;
  margin: 0 0 20px 0;
  border-radius: 0.5em;
  border: 1px solid #858585;
  width: 100%;
  padding: 5px 20px 5px 10px;
  :focus {
    box-shadow: 0 0 3px #858585;
  }
`;

export const Button = styled.button`
  outline: none;
  font-size: 16pt;
  background: white;
  border: 2px solid white;
  border-bottom: 3px solid #1d7143;
  color: #212529;
  padding: 0 20px 0 20px;
  transition: 0.3s;
  :hover {
    border-radius: 2em;
    transition: 0.5s;
    margin-bottom: 1px;
    border: 2px solid #1d7143;
  }
  :disabled {
    opacity: 0.5;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0 30px 0;
`;
