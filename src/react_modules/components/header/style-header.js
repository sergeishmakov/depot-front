import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  background: #2b5f2500;
  border: 2px solid #2b5f2500;
  border-bottom: 2px solid grey;
  margin: 10px 5px 0 5px;
  color: grey;
  outline: none;
  display: inline-block;
  width: 100px;
  :hover {
    border-radius: 2em;
    transition: 1s;
    margin-bottom: 1px;
    padding: 0 10px 0 10px;
    border: 2px solid #000;
    color: #000;
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
  display: block;
  width: 100px;
  background: #2b5f2500;
  border: 2px solid #2b5f2500;
  border-bottom: 2px solid grey;
  text-align: center;
  margin: 10px 5px 0 5px;
  color: grey;
  :hover {
    border-radius: 2em;
    transition: 1s;
    color: black
    padding: 0 10px 0 10px;
    border: 2px solid #000;
    text-decoration: none;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px 0 10px 0;
`;

const Hello = ({ className, children, href }) => (
  <div>
    <span>Hello, </span>
    <a href={href} className={className}>
      {children}
    </a>
  </div>
);

export const MiniPhoto = styled.a`
display: block;
  width: 100px
  height: 100px;
  border: 2px solid grey;
  border-radius: 50px;
  background-image: url("${props => props.src}");
  background-size: 100%;
  margin: 10px;
`;

export const HelloUser = styled(Hello)`
  color: grey;
  :hover {
    color: #000;
  }
`;

export const Cart = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(/cart.png);
  background-size: 70%;
  background-position: right center;
  background-repeat: no-repeat;
  width: 65px;
  height: 40px;
  color: #117ae5;
  font-weight: bold;
  :hover {
    color: #044e9b;
    text-decoration: none;
    background-image: url(/carth.png);
  }
`;

export const Count = styled.p`
  margin: 4px 2px 2px 0;
  font-size: 1em;
`;
