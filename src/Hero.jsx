import React from "react";
import styled from "styled-components";

  const HeroContainer = styled.div`
  background-image: url("src/assets/back.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(var(--blur));
  height: 600px;
  position: absolute;
  width: 100%;
  z-index: 0;
`; 

const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("src/assets/back.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  z-index: -1;
`;

const HeroText = styled.h1`
  color: #292b3d;
  text-align: center;
  letter-spacing: 1px;

  h1{
    font-size: 85px;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
  }

  p{
    font-size: 22px;
    color: #282a2bbf;
    font-weight: 500;
    font-family: "Alipno", sans-serif;
  }

  h3 {
    font-size: 30px;
    font-weight: normal;
    color: #282a2b;
    font-family: "Alipno", sans-serif;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroBackground />
      <HeroText>
        <p>Hey There!✌️</p>
        <h1>I'm Aylin Westin</h1>
        <h3>I am a UX/UI designer with frontend skills based in Stockholm.</h3>
      </HeroText>
    </HeroContainer>
  );
}

export default Hero;
