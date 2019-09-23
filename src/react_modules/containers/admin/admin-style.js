import styled from "styled-components";

export const color = "black";
export const back = "white";

export const Title = styled.h2`
  color: black;
  margin: 30px 0 0 0;
`;

export const Header = styled.div`
  height: 80px;
  margin: 0;
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 0 10%;
  background: white;
  border-radius: 20px;
  padding: 20px 80px 80px 80px;
  width: 80%;
  color: ${color};
  background: ${back};
  @media (max-width: 481px) {
    padding: 5px 0 50px 0;
    width: 100%;
    margin: 50px 0 0 0;
    border-radius: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    margin: 100px 0 0 5%;
    padding: 5px 0 50px 0;
  }
`;
export const Link = styled.button`
  font-family: Calibry, sans-serif;
  outline: none;
  background: ${props => (props.activeLink ? "#2fbf50" : "white")};
  color: ${props => (props.activeLink ? "white" : "#2fbf50")};
  border: 2px solid ${props => (props.activeLink ? "#2fbf50" : "#2fbf50")};
  padding: 3px 0 3px 0;
  min-width: 100px;
  border-radius: 0.5em;
  font-size: 1.3em;
  margin: 0 10px 0 10px;
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
    padding: 3px 5px 3px 5px;
    min-width: 0px;
    margin: 0 5px 0 5px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;
