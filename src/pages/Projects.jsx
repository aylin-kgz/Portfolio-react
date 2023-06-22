import React from 'react';
import styled from 'styled-components';
import EcoConnectImage from '../assets/Ecoconnect.jpg';
import MockupImage from '../assets/mockup.png';
import HooBankImage from '../assets/Hoobank.jpg';


const Container = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  margin-bottom: 5rem;
`;

const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 390px;
  height: 500px;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #666666;
  font-size: 18px;
`;

const projects = [
  {
    id: 1,
    title: 'EcoConnect',
    description: 'Green Tech organization platform',
    backgroundImage: `url(${EcoConnectImage})`,
  },
  {
    id: 2,
    title: 'CookWise AB',
    description: 'Take control of your oven using your smartphone',
    backgroundImage: `url(${MockupImage})`,
  },
  {
    id: 3,
    title: 'HooBank',
    description: 'The next generation payment method',
    backgroundImage: `url(${HooBankImage})`,
  },
];

const MyProjects = () => {
  return (
    <Container>
      <Title>My latest projects! 👩🏻‍💻 </Title>
      <CardContainer>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardImage style={{ backgroundImage: project.backgroundImage }} />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default MyProjects;
