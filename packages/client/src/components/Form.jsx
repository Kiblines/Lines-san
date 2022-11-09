import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export default function Form() {
  return <StyledForm></StyledForm>;
}
