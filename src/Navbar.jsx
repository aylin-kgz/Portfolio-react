import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: top;
`;

const StyledLink = styled(Link)`
    color: #ffffffeb;
    flex: 1;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    background: #2c1b42;
    border-radius: 30px;
    padding: 8px 12px;
    margin: 3rem;
`;

const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </StyledNav>
    );
}

export default Navbar;
