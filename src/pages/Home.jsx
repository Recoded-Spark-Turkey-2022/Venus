import React from 'react';
import HeroSection from '../components/homePage/HeroSection';
import Container from '../components/UI/Container';
import Reference from '../components/reference/Reference';
import Partners from '../components/Partners/Partners';
import StoriesSection from '../components/UI/StoriesSection';
import ContainAbout from '../components/UI/ContainAbout';

const Home = ({message}) => {
  return (
    <>
      <Container>
        <HeroSection messageClick={message}/>
      </Container>
      <ContainAbout />
      <Container>
        <Reference />
        <Partners />
      </Container>
      <StoriesSection />

    </>
  );
};

export default Home;
