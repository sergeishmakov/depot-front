import styled from "styled-components";
import img from "./nophoto.gif";

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const Photo = styled.img`
  margin-top: 30px;
  width: 250px;
`;
export const NoPhoto = styled.div`
  margin-top: 30px;
  width: 250px;
  height: 250px;
  background-image: url(${img});
  background-size: cover;
  border: 1px solid grey;
`;

export const PhotoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  justify-content: center;
`;
