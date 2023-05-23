import React from 'react';
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

import Hamburger from './components/Hamburger';

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: top;
`;

const links = [
    {
        id:1,
        to: "/",
        text: "Home"
      },
      {
        id:2,
        to: "/contact",
        text: "Contact"
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
]

export const StyledLink = styled(Link)`
    color: #421d82eb;
    flex: 1;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
`;

const Navbar = () => {
     /* const [isOpen, setItOpen] = useState(false); */

    return (
      <>
              <StyledNav>
            {links.map(link => <StyledLink to={link.to} key={link.text}>{link.text}</StyledLink>)}
        </StyledNav>
        <Hamburger links={links}>

        </Hamburger>
      </>
    );
}

export default Navbar;
