import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

import Card from '../components/Card'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-area: main;
    width: 100%;
`;

const CardContainer =styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

function Home() {

    return (
        <>
            <h4>Hey There!✌️ </h4>
            <h1>I'm Aylin Westin</h1>
            <h3>I am a UX/UI designer with frontend skills based in Stockholm.</h3>
            <CardContainer>
            <Card/>
            <Card/>
            <Card/>
            </CardContainer>
           

        </>
    );
}

export default Home;