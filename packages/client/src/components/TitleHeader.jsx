import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  height: 56px;
  border-radius: 10px 10px 0px 0px;
  background-color: #052e50;
  align-items: center;
  padding-left: 16px;
  justify-content: center;
`;

const Container = styled.h1`
  display: flex;
  justify-content: center;
  width: 431px;
  height: 48px;
  margin: 40px 85px 40px 40px;
  font-family: NunitoSans;
  font-size: 40px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #052e50;
  font-family: "Nunito Sans", sans-serif;
  background-color: ${(props) => props.background};
`;

export default function Title(props) {
  let backgroundColor = "#ffae00";
  return (
    <Background>
      <Container background={backgroundColor}>{props.children}</Container>
    </Background>
  );
}
