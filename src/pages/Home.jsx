import React from 'react';
import HeroSection from '../components/homePage/HeroSection';
import Container from '../components/UI/Container';
import Partners from '../components/Partners/Partners';
import Reference from '../components/Reference/Reference';


const Home = () => {
  return (
    <Container>

      <h1 className="text-darkOrange bg-lightBlue">Hello</h1>
      <HeroSection />
      <Reference />
      <Partners/>

    </Container>
  );
};

export default Home;
