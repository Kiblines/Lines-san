import React from "react";
import styled from "styled-components";

const Container = styled.h1`
  font-size: 40px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #052e50;
  font-family: "Nunito Sans", sans-serif;
`;

export default function Title(props) {
  return <Container>{props.children}</Container>;
}
