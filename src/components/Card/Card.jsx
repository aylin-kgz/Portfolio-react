import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: #ffffff;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
  
`;

const StyledImage = styled.img`
  width: 55%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;

${CardContainer}:hover & {
  transform: scale(1.05);
}
`;

const StyledContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.reverse ? 'flex-start' : 'flex-end')};
`;

const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-top: 1rem;
  color: #282A2B;
`;

const StyledDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 20px;
  color: #63625E;
  font-weight: 500;
`;

function Card({ image, alt, title, description, reverse }) {
    return (
      <CardContainer reverse={reverse}>
        <StyledImage src={image} alt={alt} />
        <StyledContent reverse={reverse}>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>
      </CardContainer>
    );
  }

export default Card;
