import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from '../Hero';
import Card from '../components/Card'
import MockupPng from '../assets/mockup.png'
import EcoconnectJpg from '../assets/Ecoconnect.jpg'
import HoobankJpg from '../assets/Hoobank.jpg'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CardContainer =styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 42em; 
`;

function Home() {

    return (
        <>
            <Hero />
            <StyledDiv>
            <CardContainer>
            <Card
                image={MockupPng}
                alt="Cookwise Image"
                title="COOKWISE AB"
                description="Take control of your oven using your smartphone"
            />
            <Card
                image={EcoconnectJpg}
                alt="Ecoconnect Image"
                title="EcoConnect"
                description="Green Tech organization platform"
                reverse
            />
            <Card
                image={HoobankJpg}
                alt="Hoobank Image"
                title="Hoobank"
                description="Frontend development"
            />
            </CardContainer>
            </StyledDiv>
        </> 
    );
}

export default Home;