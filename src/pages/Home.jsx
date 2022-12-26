import React from 'react';
import ContainAbout from '../components/UI/ContainAbout';
import Container from '../components/UI/Container';

const Home = () => {
  return (
    <>
    <Container>
      <h1 className="text-darkOrange bg-lightBlue"> Hello</h1>
    </Container>

    <ContainAbout />
    </>
  );
};

export default Home;
