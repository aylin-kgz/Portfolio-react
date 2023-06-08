import React from 'react';
import styled from 'styled-components';

import Form from '../components/Form';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h1 {
    margin-left: 20.5rem;
    font-weight: 800;
  }

  p {
    margin-left: 23rem;
    color: #444444;
    width: 550px;
    text-align: left;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <h1>Get in touch!</h1>
      <p>
        Feel free to reach out using the contact form below or directly via email. Looking forward to connecting with
        you!
      </p>
      <Form />
    </ContactContainer>
  );
}

export default Contact;
