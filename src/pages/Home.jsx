import React from 'react';
import HeroSection from '../components/homePage/HeroSection';
import Container from '../components/UI/Container';
import Reference from '../components/Reference';
import Partners from '../components/Partners/Partners'
import StoriesSection from '../components/UI/StoriesSection';


const Home = () => {
  return (
    <>
     <Container>
      
      <HeroSection />
      <Reference />
      <Partners/>
     </Container>
     <StoriesSection/>


    </>
  );
};

export default Home;
