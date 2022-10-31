import React from "react";
import styled, { StyledComponent } from "styled-components";
import banderole from "../banderole.jpeg";

const StyledBanderole = styled.div`
  border: 1px solid #000;
  background-image: url(${banderole.jpeg});
`;

export default function Banderole() {
  return <StyledBanderole>Je suis un gros noob</StyledBanderole>;
}
