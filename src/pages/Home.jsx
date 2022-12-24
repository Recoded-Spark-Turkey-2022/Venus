import React from 'react';
import Container from '../components/UI/Container';
import StoriesSection from '../components/UI/StoriesSection';

const Home = () => {
  return (
    <>
     <Container>
       <h1 className="text-darkOrange bg-lightBlue">Hello</h1>
     </Container>
     <StoriesSection/>
    </>
  );
};

export default Home;
