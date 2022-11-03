import React from "react";
import styled from "styled-components";
import logo from "../banderole.jpeg";
import ponchite from "../logo.jpg";

const StyledBanderole = styled.div`
  border: 1px solid #000;
  background-image: url(${logo});
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
`;
const StyleImg = styled.img``;

export default function Banderole() {
  return (
    <StyledBanderole>
      <StyleImg src={ponchite}></StyleImg>
    </StyledBanderole>
  );
}
