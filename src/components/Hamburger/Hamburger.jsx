import React, { useState } from 'react';
import { StyledLink } from '../../Navbar';

import { StyledHamburger, StyledResMenu } from './styles';

function Hamburger(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <StyledHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <label>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </StyledHamburger>
        <StyledResMenu isOpen={isOpen}>
            {props.links.map(link => <StyledLink to ={link.to} key={link.id}>{link.text}</StyledLink>)}
        </StyledResMenu>
        </>
    )
}


export default Hamburger;