import React from "react";

import {CardContainer, StyledCodingPic, StyledReactPic, StyledButton,  StyledP } from './styles';
import codingPic from '../../assets/coding.jpg';
import reactPic from '../../assets/react.jpg';

function Card() {

    return (
        <CardContainer>
            <StyledCodingPic src={codingPic} alt="=Coding" />
            <StyledReactPic src={reactPic} alt="=React" />
            <h1>Cookwise AB</h1>
            <StyledP>Take control of your oven using your smartphone</StyledP>
            <StyledButton>View more</StyledButton>
        </CardContainer>
    )
}

export default Card;