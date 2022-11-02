import React from "react";
import styled, { StyledComponent } from "styled-components";
import logo from "../banderole.jpeg";
import ponchite from "../logo.jpg";

const StyledBanderole = styled.div`
  border: 1px solid #000;
  background-image: url(${logo});
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
`;
const StyleImg = styled.img``;

export default function Banderole() {
  return (
    <StyledBanderole>
      <StyleImg src={ponchite}></StyleImg>
      Je suis un gros noob
    </StyledBanderole>
  );
}
