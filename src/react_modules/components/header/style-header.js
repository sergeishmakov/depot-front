import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  background: #2b5f2500;
  border: 2px solid #2b5f2500;
  border-bottom: 2px solid #2b5f25;
  margin: 0 5px 0 5px;
  color: rgba(255, 255, 255, 0.5);
  outline: none;
  display: inline-block;
  width: 100px;
  :hover {
    border-radius: 2em;
    transition: 1s;
    margin-bottom: 1px;
    padding: 0 10px 0 10px;
    border: 2px solid #3ac72a;
    color: #3ac72a;
  }
  :visited {
    outline: none;
  }
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }
`;
export const Link = styled.a`
  text-align: center;
  width: 100px;
  background: #2b5f2500;
  border: 2px solid #2b5f2500;
  border-bottom: 2px solid #2b5f25;
  margin: 0 5px 0 5px;
  color: rgba(255, 255, 255, 0.5);

  :hover {
    border-radius: 2em;
    transition: 1s;
    padding: 0 10px 0 10px;
    border: 2px solid #3ac72a;
    text-decoration: none;
    color: #3ac72a;
  }
`;

const Hello = ({ className, children, href }) => (
  <Block>
    <span>Hello, </span>
    <a href={href} className={className}>
      {children}
    </a>
  </Block>
);

export const HelloUser = styled(Hello)`
  color: #2b5f25;
  :hover {
    color: #3ac72a;
  }
`;

const Block = styled.div`
  color: rgba(255, 255, 255, 0.5);
  margin: 0 20px 0 0;
  font-size: 16pt;
`;
