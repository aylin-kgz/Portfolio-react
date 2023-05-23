import React from "react";

import {CardContainer, StyledCodingPic, StyledReactPic, StyledButton,  StyledP } from './styles';
import codingPic from '../../assets/coding.jpg';
import reactPic from '../../assets/react.jpg';

function Card() {

    return (
        <CardContainer>
            <StyledCodingPic src={codingPic} alt="=Coding" />
            <StyledReactPic src={reactPic} alt="=React" />
            <h1>React Portfolio</h1>
            <StyledP>Please behold my amazing React portfolio, showcasing my immense skills.</StyledP>
            <StyledButton>View more</StyledButton>
        </CardContainer>
    )
}

export default Card;