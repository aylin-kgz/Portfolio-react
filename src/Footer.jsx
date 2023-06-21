import React from "react";
import styled from "styled-components";
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import telegram from './assets/telegram.png';

const StyledFooter = styled.footer`
  grid-area: footer;
  align-self: center;
  color: #1e1d1d;
  width: 1000px;

  h1 {
    width: auto;
    font-size: 90px;
    font-weight: 900;
    color: #3e3946;
    margin-top: 25rem;
    letter-spacing: 1px;
}
`;

const StyleImg = styled.img`
  height: 36px;
  width: 36px;
`; 

/* const LogoContainer = styled.div`
  max-width: 3.5rem;
  grid-area: logo;
`;

const StyledImg = styled.img`
  width: 100%;
`; */

const Divider = styled.hr`
  width: auto;  
  margin: 1rem auto;
  border: none;
  border-top: 2px solid #5f5e5e;
  margin-bottom: 4rem;
`;

const Email = styled.a`
  display: block;
  text-decoration: none;
  color: #906bff;
  font-size: 22px;
  font-weight: 700;
`;

let footerData = [
  {
    id: 2,
    to: "https://github.com/aylin-kgz",
    icon: github,
    alt: "github"
  },
  {
    id: 4,
    to: "https://www.linkedin.com/in/aylin-westin-31241224b/",
    icon: linkedin,
    alt: "linkedin"
  },
  {
    id: 5,
    to: "https://t.me/aywtn",
    icon: telegram,
    alt: "telegram"
  },
];

const Footer = () => {
  return (
    <StyledFooter>
        <h1>GET IN TOUCH!</h1>
        <Email href="mailto:aylin.westin@gmail.com">aylin.westin@gmail.com</Email>
        <Divider />
      {footerData.map(link => (
        <a href={link.to} key={link.icon}><StyleImg src={link.icon}/></a>
      ))}
      <p>© 2023 Aylin Westin</p>
    </StyledFooter>
  );
};

export default Footer;
