import React from 'react';
import styled from 'styled-components';
import AboutJpg from '../assets/about.jpg';
import HobbiJpeg from '../assets/hobbi.jpeg';

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center; 
`;

const AboutImage = styled.img`
  width: 100%; 
  margin-bottom: 16rem;
`;

const HeroText = styled.div`
  display: flex; 
  font-size: 18px;
  flex-direction: column; 
  justify-content: flex-start; 
  color: #282A2B;

  h1 {
    font-weight: 800;
    text-align: left; 
  }
  p {
    text-align: left; 
    color: #1C1B1EBF;  
  }
`;

const AdditionalText = styled.p`
  text-align: left;
  font-size: 18px;
  margin-bottom: 80px;
  margin-right: 25px;
  color:#1C1B1EBF;

  h1 {
    font-weight: 800;
    margin-bottom: 35px;
    color: #282A2B;
  }
`;

const RightImage = styled.img`
  width: 80%;
  margin-top: 220px;
`;

const ResumeButton = styled.button`
  padding: 14px 20px;
  background-color: #282A2B;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: -480px;
  width: 150px;
  margin-top: 20px;
`;

function About() {
    return (
      <HeroSection>
        <div>
          <AboutImage src={AboutJpg} alt="About Image" />
          <AdditionalText>
            <h1>What I do when I'm not working</h1>
            <p>
              <span>
              I'm passionate about traveling, spending quality time with loved ones, enjoying music, coffee, and staying active. I also have a deep love for nature.
              </span>
            </p>
            <p>
              <span>
              Exploring the world, forging meaningful connections, and immersing myself in melodies inspire me. Coffee keeps me energized, while training keeps me grounded.
              </span>
            </p>
          </AdditionalText>
        </div>
        <div>
          <HeroText>
            <h1>About me</h1>
            <p>
              <span>Hey there!</span>
            </p>
            <p>
              <span>
                I am currently studying at Chas Academy in Stockholm. I have always been interested in design and often come
                up with creative solutions. That's why I decided to enter the world of UX/UI design, which has been one of
                my best decisions.
              </span>
            </p>
            <p>
              <span>Additionally, I have a strong interest in coding, but at the moment, I am more focused on UX and UI design.</span>
            </p>
            <p>
              <span>Let's collaborate and create delightful experiences together!</span>
            </p>
          <a href="https://drive.google.com/file/d/1dU6jX3oMluEvbxT8XwCwrunR51zI03IL/view?usp=sharing" target="_blank" rel="noopener noreferrer"><ResumeButton>My Resumé</ResumeButton></a>
          </HeroText>
          <RightImage src={HobbiJpeg} alt="Right Image" />
        </div>
      </HeroSection>
    );
  }
  

export default About;
