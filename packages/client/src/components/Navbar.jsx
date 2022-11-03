import React from "react";
import styled from "styled-components";
import Logo from "../lines-san.png";
import { NavLink } from "react-router-dom";
import background from "../background-header.jpg";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: flex-start;
  overflow: hidden;
  background-image: url(${background});
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  float: left;
  font-size: 36px;
`;

const StyledLink = styled(NavLink)`
  all: "none";
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    color: #ddd;
  }
`;

export default function Navbar() {
  return (
    <StyledRow src={background}>
      <img style={{ width: 100, height: 100 }} src={Logo} alt="logo" />
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Accueil</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/training">Cours</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/books">Livres</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledRow>
  );
}
