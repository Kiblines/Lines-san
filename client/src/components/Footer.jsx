import React from "react";
import styled from "styled-components";
import facebook from "../fb.png";
import youtube from "../youtube.png";
import twitter from "../twitter.png";
import instagram from "../instagram.png";
import logo from "../banderole.jpeg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url(${logo});
`;

const StyledIcon = styled.img`
  height: 80px;
`;

export default function Footer() {
  return (
    <>
      <StyledDiv>
        <StyledIcon src={facebook}></StyledIcon>
        <StyledIcon style={{ height: 70 }} src={youtube}></StyledIcon>
        <StyledIcon src={twitter}></StyledIcon>
        <StyledIcon src={instagram}></StyledIcon>
      </StyledDiv>
    </>
  );
}
