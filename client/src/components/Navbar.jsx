import React from "react";
import styled from "styled-components";
import Logo from "../lines-san.png";
import { NavLink } from "react-router-dom";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: flex-start;

  overflow: hidden;
  background-color: red;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  float: left;
  font-size: 36px;
`;

const StyledLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <StyledRow>
      <img style={{ width: 100, height: 100 }} src={Logo} alt="logo" />
      <StyledUl>
        <StyledListItem>
          <StyledLink>
            <img src={Logo} style={{ width: 100, height: 100 }}></img>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink>
            <NavLink to="/home">Accueil</NavLink>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink>
            <NavLink to="/cours">Cours</NavLink>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink>
            <NavLink to="/livres">Livres</NavLink>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink>
            <NavLink to="/contact">Contact</NavLink>
          </StyledLink>
        </StyledListItem>
      </StyledUl>
    </StyledRow>
  );
}
