import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactImage = styled.img`
  width: 480px;
  max-height: 800px;
  object-fit: cover;
  margin-right: 18rem;
  margin-left: -18rem;
  margin-bottom: 10rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: -7rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: normal;
  margin-bottom: 5px;
  text-align: left; 
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 500px;
  height: 30px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 500px;
  height: 180px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  width: 140px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 8rem;
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactImage src="src/assets/contact.jpeg" alt="Contact Image" />
      <ContactForm>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter your name" required />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email" required />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea rows={5} placeholder="Enter your message" required />
        </FormGroup>
        <SubmitButton type="submit">Send Email</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
