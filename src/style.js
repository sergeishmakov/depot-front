import styled from "styled-components";
import React from "react";
import { Field } from "react-final-form-html5-validation";

export const buttondefault = `
  background: white;
  color: #2fbf50;
  outline: none;
  padding: 3px 5px 3px 5px;
  border-radius: 0.5em;
  font-size: 1.3em;
  margin: 0;
  border: 0px;
  :hover {
    outline: none;
    background: #55cc70;
    color: white;
  }
  :focus {
    outline: none;
  }
  :active {
    outline: none;
  }
  @media (max-width: 481px) {
    font-size: 1em;
    padding: 3px 1px 3px 1px;
  }
`;

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
  position: relative;
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
  tooShort,
  value,
  list,
  required
}) => (
  <Field
    className={className}
    name={name}
    component="input"
    type={type}
    placeholder={placeholder}
    required={required ? true : false}
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
  margin: 0 0 0 0;
  border-radius: 0.5em;
  border: 1px solid #858585;
  width: 100%;
  padding: 5px 20px 5px 10px;
  :focus {
    box-shadow: 0 0 3px #858585;
  }
`;

const select = ({ children, className, name }) => (
  <Field className={className} name={name} component="select" required>
    {children}
  </Field>
);

export const Select = styled(select)`
  outline: none;
  background: transparant;
  margin: 0 0 0 0;
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
  margin: 20px 0 0 0;
  color: #212529;
  padding: 0 10px 0 10px;
  transition: 0.5s;
  :hover {
    border-radius: 2em;
    transition: 0.5s;
    margin-bottom: 1px;
    padding: 0 20px 0 20px;
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

export const Label = styled.label`
  margin: 20px 0 0 0;
`;

export const Blocks = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
`;
export const FirstBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0 0 0;
  width: 40%;
`;
export const SecondBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 50px 0 0 0;
  width: 60%;
`;

const Alert = styled.span`
  padding: 10px 20px 10px 20px;
  width: 80%;
  border-radius: 5px;
  margin: -10px -10px -10px -10px;
`;
export const AlertInfo = styled(Alert)`
  color: #9bcef5;
  background: #e1f4ff;
  border: 1px solid #b4e3fe;
`;
export const AlertSuccess = styled(Alert)`
  color: #427c53;
  background: #d3eedb;
  border: 1px solid #e8f6eb;
`;
export const EmptyAlert = styled(Alert)`
  padding: 10px 20px 10px 20px;
  width: 80%;
  border-radius: 5px;
  opacity: 0;
`;
