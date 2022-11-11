import React from "react";
import styled from "styled-components";
import facebook from "../fb.png";
import youtube from "../youtube.png";
import twitter from "../twitter.png";
import instagram from "../insta.png";
import logo from "../banderole.jpeg";
import gmail from "../gmail.png";

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${logo});
  margin-top: auto;
  height: 100px;
  //media query at 768px
  @media (max-width: 768px) {
    align-items: center;
    height: auto;
  }
`;
const StyledLink = styled.a`
  display: flex;
  margin: 16px;
`;

const StyledIcon = styled.img`
  max-height: 50px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="https://www.instagram.com/nicoots/">
        <StyledIcon src={facebook}></StyledIcon>
      </StyledLink>
      <StyledLink href="https://www.instagram.com/nicoots/">
        <StyledIcon src={youtube}></StyledIcon>
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
    </StyledFooter>
  );
}
