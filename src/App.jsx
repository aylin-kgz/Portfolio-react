import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import './app.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import logo from './assets/logo.jpeg';

const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
max-width: 3.5rem;
grid-area: logo;
`;

const StyledImg = styled.img`
width: 100%;
border-radius: 50%;
`;

const MainContainer = styled.div`
grid-area: main;
`;

const GridContainer = styled.div`
display: grid;
grid-template-rows: 10rem repeat(3, 1fr) 10rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas: 
"logo top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
". . footer . .";
min-height: 100vh;
`

function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer> 
          <StyledImg src={logo} alt="Logo" /> 
        </LogoContainer>
        <Navbar />
        <MainContainer>
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/portfolio">
            <p>Portfolio</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
        <h1>Hello Aylin</h1>
        </MainContainer>
        <Footer />
      </GridContainer>
    </Router>
  );
}

// Läxa tills 7/3:
// Skapa din personliga footer i samråd med andra på Discord.
// titta på exempel på andra porföljer
// Du kan t.ex linkedin-ikon och github-ikon figma-ikon ?
// Tips: "Fontawsome"
// Obs. Discort är ICKE frivilligt; men ni behöver inte göra hela läxan på discord
// Om du blir klar nmed detta; gör samma sak med Navbar
// Pusha ditt projekt till github: skicka länk till mig.


export default App;