import React from "react";
import styled from "styled-components";
import facebook from "../fb.png";
import youtube from "../youtube.png";
import twitter from "../twitter.png";
import instagram from "../insta.png";
import logo from "../banderole.jpeg";
import gmail from "../gmail.png";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-image: url(${logo});
  margin-top: auto;
`;
const StyledLink = styled.a`
  display: flex;
`;

const StyledIcon = styled.img`
  height: 80px;
`;

export default function Footer() {
  return (
    <>
      <StyledDiv>
        <StyledLink href="https://www.instagram.com/nicoots/">
          <StyledIcon src={facebook}></StyledIcon>
        </StyledLink>
        <StyledLink href="https://www.instagram.com/nicoots/">
          <StyledIcon style={{ height: 70 }} src={youtube}></StyledIcon>
        </StyledLink>
        <StyledLink href="https://www.instagram.com/nicoots/">
          <StyledIcon src={twitter}></StyledIcon>
        </StyledLink>
        <StyledLink href="https://www.instagram.com/nicoots/">
          <StyledIcon src={instagram}></StyledIcon>
        </StyledLink>
        <StyledLink href="mailto:linesanthony018@gmail.com">
          <StyledIcon src={gmail}></StyledIcon>
        </StyledLink>
      </StyledDiv>
    </>
  );
}
