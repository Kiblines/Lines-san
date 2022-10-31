import React from "react";
import styled from "styled-components";
import SearchIcon from "../icons/search-icon.svg";

const Input = styled.input`
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(5, 46, 80, 0.24);
  background-color: #fff;
  padding-left: 38px;
  height: 40px;
  width: 364px;
  border: 1px solid lightgrey;
  font-family: "Nunito Sans", sans-serif;
`;

const Icon = styled.img`
  position: absolute;
  width: 42px;
  height: 42px;
`;

const InputContainer = styled.div``;

export default function SearchInput(props) {
  const { placeholder } = props;

  return (
    <InputContainer>
      <Icon src={SearchIcon} />
      <Input placeholder={placeholder} />
    </InputContainer>
  );
}
