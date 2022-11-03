import React from "react";
import styled from "styled-components";
import Logo from "../lines-san.png";
import { NavLink } from "react-router-dom";
import background from "../background-header.jpg";

const StyledRow = styled.nav`
  font-size: 18px;
  background-image: linear-gradient(
    260deg,
    rgb(42, 244, 152, 255) 0%,
    #3498db 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: ${(props) => props.display};
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StyledLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;

const StyledLink = styled(NavLink)`
  all: "none";
  text-decoration: none;
  color: black;
  list-style-type: none;

  &:hover {
    color: #ddd;
  }
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;

export default function Navbar() {
  return (
    <StyledRow src={background}>
      <img style={{ height: "100%" }} src={Logo} alt="logo" />
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
