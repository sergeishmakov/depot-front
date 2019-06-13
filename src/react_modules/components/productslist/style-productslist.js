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

export const ProductName = styled.div`
  text-decoration: underline;
  background: ${props =>
    Number(props.id.split("product")[1]) % 2 === 1 ? "#e3f7e6" : "#fff"};
  font-size: 1.3em;
  color: black;
  padding: 10px;
  :hover {
    color: #235129;
    cursor: pointer;
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
