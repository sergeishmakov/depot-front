import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  padding: 30px;
  width: 80%;
  @media (max-width: 481px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: black;
`;

export const BuyBlock = styled.div`
  padding: 20px;
  box-shadow: 0 0 5px grey;
  font-size: 16px;
  color: black;
  margin 20px 0 20px 0 ;
  border-radius: 0.5em;
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
`;

export const BuyBtn = styled.button`
  width: 100px;
  border: 0px;
  border-radius: 0.5em;
  background: #1f8efd;
  color: white;
  padding: 5px 0 5px 0;
  margin: 0 10px 0 10px;
`;

export const Cart = styled.button`
  width: 100px;
  border: 0px;
  border-radius: 0.5em;
  background: tomato;
  color: white;
  padding: 5px 0 5px 0;
  margin: 0 10px 0 10px;
`;
