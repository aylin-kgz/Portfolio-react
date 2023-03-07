import React from "react";
import styled from "styled-components";
import figma from './assets/figma.png';
import github from './assets/github.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import telegram from './assets/telegram.png';
import logo from './assets/logo.jpeg';

const StyledFooter = styled.footer`
  grid-area: footer;
  /* display: flex; */
  align-self: center;
  color: white;
`;

const StyleImg = styled.img`
height: 36px;
width: 36px;
`; 

const LogoContainer = styled.div`
max-width: 3.5rem;
grid-area: logo;
`;

const StyledImg = styled.img`
width: 100%;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://www.figma.com/login"><StyleImg src={figma} alt="Figma" /></a>
            <a href="https://github.com/aylin-kgz"><StyleImg src={github} alt="Github" /></a>
            <a href="https://www.instagram.com/"><StyleImg src={instagram} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/aylin-westin-31241224b/"><StyleImg src={linkedin} alt="Linkedin" /></a>
            <a href="https://telegram.org/"><StyleImg src={telegram} alt="Telegram" /></a>
            <p>© 2023 Aylin Westin</p>
        </StyledFooter>
    );
}



export default Footer;