import React from 'react';
import HeroSection from '../components/homePage/HeroSection';
import Container from '../components/UI/Container';
import Partners from '../components/Partners/Partners';
import Reference from '../components/Reference';
import StoriesSection from '../components/UI/StoriesSection';


const Home = () => {
  return (
    <>
     <Container>
       <h1 className="text-darkOrange bg-lightBlue">Hello</h1>
      <HeroSection />
      <Reference />
     </Container>
     <StoriesSection/>

    </>
  );
};

export default Home;
