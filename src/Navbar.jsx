import React from 'react';
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    grid-area: top;
`;

const links = [
    {
        id:1,
        to: "/",
        text: "Home"
      },
      {
        id:3,
        to: "/about",
        text: "About"
      },
      {
        id:3,
        to: "/projects",
        text: "Projects"
      },
      {
        id:2,
        to: "/contact",
        text: "Contact"
      },
]

export const StyledLink = styled(Link)`
    color: #010101eb;
    flex: 1;
    text-align: center;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;

    &:hover {
    color: #906bff; 
    font-weight: bold;
    text-decoration: underline; 
  }

  &.active {
    font-weight: bold;
    text-decoration: underline; 
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <StyledNav>
        {links.map((link) => (
          <StyledLink
            to={link.to}
            key={link.text}
            className={pathname === link.to ? "active" : ""}
          >
            {link.text}
          </StyledLink>
        ))}
      </StyledNav>
    </>
  );
};

export default Navbar;
