import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Hero from './Hero';
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
display: flex;
flex-direction: column;
align-items: center;
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
        <Hero text="MyHero" /> 
        <MainContainer>
        <Switch>
        <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <h1>Hello Aylin</h1>
        </MainContainer>
        <Footer />
      </GridContainer>
    </Router>
  );
}




export default App;