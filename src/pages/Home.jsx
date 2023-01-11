import React from 'react';
import HeroSection from '../components/homePage/HeroSection';
import Container from '../components/UI/Container';
import Reference from '../components/Reference';
import Partners from '../components/Partners/Partners'
import StoriesSection from '../components/UI/StoriesSection';
import ContainAbout from '../components/UI/ContainAbout';


const Home = () => {
  return (
    <>
      <Container>
       <h1 className="text-darkOrange bg-lightBlue">Hello</h1>
      <HeroSection />
     </Container>
           <ContainAbout />
     <Container>
      <Reference/>
      <Partners/>
     </Container>
     <StoriesSection/>


    </>
  );
};

export default Home;
