import styled from "styled-components";
import React from "react";

let color = "green";
let back = "black";

export const Title = styled.h2`
  margin: 30px 0 0 0;
`;

export const Header = styled.div`
  font-family: "Share Tech Mono", monospace;
  margin: 20px;
  height: 80px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${color}
  position: fixed;
  z-index: 2;
`;

export const Main = styled.div`
  font-family: 'Share Tech Mono', monospace;
  position: fixed
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 80px 80px 80px;
  width: 100%;
  height: 1000px;
  color: ${color};
  background: ${back};
  overflow-y: scroll;
  z-index: 1;
`;
export const Link = styled.button`
  background: ${back};
  color: ${color}
  height: 1.5em;
  font-size: 1.5em;
  margin: 0 10px 0 10px;
 border: 1px dashed ${back}
  :hover{
    border: 1px dashed ${color};
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;
