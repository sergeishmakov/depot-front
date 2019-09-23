import styled from "styled-components";
import { color, back } from "../../containers/admin/admin-style";
import { buttondefault } from "../../../style";

export const Select = styled.select`
  ${buttondefault};
  color: black;
  background: ${back};
  border-radius: 0px;
  font-size: 1em;
  border-bottom: 2px solid #2fbf50;
  :hover {
    background: white;
    color: #2fbf50;
  }
  :focus {
    color: black;
  }
`;
export const Button = styled.button`
  ${buttondefault};
`;
export const Option = styled.option`
  outline-color: ${color};
  color: black
  border: 2px solid ${color};
  border-radius: 0.5;
  background: ${back};
`;
export const Row = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  margin: 0 10px 20px 10px;
  @media (min-width: 768px) {
    flex-flow: wrap row;
    margin: 0 10px 10px 10px;
  }
`;

export const Cell = styled.div`
  padding: 0 30px 0 30px;
  width: ${props => (props.email ? "50%" : props.uid ? "10%" : "20%")};
  font-size: ${props => (props.headline ? "1.3em" : "1em")};
  ${props => (props.email ? "word-wrap: break-word" : "")};
  @media (max-width: 481px) {
    font-size: ${props => (props.headline ? "1em" : "0.8em")};
    padding: 0 5px 0 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 30px 0;
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
