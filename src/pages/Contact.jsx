import React from 'react';
import styled from 'styled-components';
import CotactJpeg from '../assets/cotact.jpeg';

const Container = styled.div`
  background-image: url(${CotactJpeg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 600px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.971);
  padding: 2rem;
  max-width: 700px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 50px;
`;

const EmailLink = styled.a`
  display: block;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #906bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 2rem;
`;


const Contact = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Get in touch!</Title>
        <Description>
        Feel free to reach out using the contact form below or directly via email. Looking forward to connecting with you!.
        </Description>
        <EmailLink href="mailto:aylin.westin@gmail.com">aylin.westin@gmail.com"</EmailLink>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
