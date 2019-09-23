import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: start;
  width: 100%;

  position: relative;
`;
export const WrapperProduct = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
  border-radius: 10px;
  transition: 0.5s;
  padding: 10px;
  border: 1px solid #1f8efd;
  :hover {
    transition: 0.5s;
    text-decoration: none;
    color: black;
    background: #cbe1f7;
  }
`;

export const Photo = styled.img`
  width: 100%;
`;

export const ReadMore = styled.p`
  font-size: 0.8em;
  border-radius: 0.5em;
  padding: 3px 10px 3px 10px;
  background: #1f8efd;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
    opacity: 0.7;
  }
`;

export const Name = styled.p`
  color: black;
  font-size: 1em;
  font-weight: bold;
  margin: 5px;
  word-break: break-all;
`;

export const Price = styled.p`
  margin: 5px;
  color: black;
`;

export const SortPanel = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;

  margin: 20px 0 20px 0;
  border-bottom: 2px solid #1f8efd;
`;
export const Select = styled.select`
  border-radius: 0.5em;
  padding: 3px 5px 3px 5px;
  margin-left: 5px;
`;

export const Label = styled.label`
  margin: 0 10px 0 10px;
`;
