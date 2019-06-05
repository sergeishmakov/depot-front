import styled from "styled-components";
import React from "react";

export const EditedForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const photoWrapper = ({ children, className }) => (
  <div className={className}>{children}</div>
);
export const PhotoWrap = styled(photoWrapper)`
  margin-top: 100px;
  width: 300px;
  height: 400px;
  border: 25px solid #fafafa;
  border-top-width: 35px;
  border-bottom-width: 100px;
  -webkit-box-shadow: 3px 3px 6px 4px #888;
  -moz-box-shadow: 3px 3px 6px 4px #888;
  box-shadow: 3px 3px 6px 4px #888;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 20%;
`;
export const NotPhoto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileInput = styled.input`
  margin: 30px; 30px 0 0;
  outline: none;
  ::-webkit-file-upload-button{
    visibility: hidden;
  };
  ::before {
    content: 'Select image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 18px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  };
  :hover::before {
    border-color: black;
  }
  :active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;
