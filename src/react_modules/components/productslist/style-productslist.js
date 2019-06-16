import styled from "styled-components";
import { buttondefault } from "../../../style";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 1em;
  .add {
    display: flex;
    justify-content: flex-end;
    width: 60%;
  }
  .listWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 60%;
  }
  @media (max-width: 481px) {
    .listWrapper {
      width: 90%;
    }
    .add {
      width: 90%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .listWrapper {
      width: 70%;
    }
    .add {
      width: 70%;
    }
  }
`;

export const AddBtn = styled.button`
  ${buttondefault};
`;

export const RowProduct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => (props.n % 2 === 0 ? "#e3f7e6" : "#b1dbbb")};

  color: black;
  padding: 10px;
  :hover {
    color: #235129;
  }
`;
export const Cell = styled.div`
  padding: 0 30px 0 30px;
  font-size: 1.3em;
  @media (max-width: 481px) {
    font-size: 1em
    padding: 0 5px 0 5px;
  }
`;
export const DeleteButton = styled.button`
  color: white;
  background: red;
  outline: none;
  border: 0px;
  font-size: 0.8em;
  text-decoration: none;
  border-radius: 1em;
  :hover {
    outline: none;
    opacity: 0.5;
  }
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

export const ProductName = styled.p`
  margin: 0px;
  font-size: 1.3em;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;
