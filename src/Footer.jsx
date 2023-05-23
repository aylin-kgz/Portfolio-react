import React from "react";
import styled from "styled-components";
import figma from './assets/figma.png';
import github from './assets/github.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import telegram from './assets/telegram.png';

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

let footerData = [
    {
        id: 1,
        to: "https://www.figma.com/login",
        icon: figma,
        alt: "figma"
    },
    {
        id: 2,
        to: "https://github.com/aylin-kgz",
        icon: github,
        alt: "github"
    },
    {
        id: 3,
        to: "https://www.instagram.com/",
        icon: instagram,
        alt: "instagram"
    },
    {
        id: 4,
        to: "https://www.linkedin.com/in/aylin-westin-31241224b/",
        icon: linkedin,
        alt: "linkedin"
    },
    {
        id: 5,
        to: "https://telegram.org/",
        icon: telegram,
        alt: "telegram"
    },
]

const Footer = () => {
    return (
        <StyledFooter>
            {footerData.map(link => (
            <a href={link.to} key={link.icon}><StyleImg src={link.icon}/></a>
            ))}
            <p>© 2023 Aylin Westin</p>
        </StyledFooter>
    );
}



export default Footer;