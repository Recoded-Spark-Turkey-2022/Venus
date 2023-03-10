
import React from 'react';
import Cover from '../components/aboutPage/Cover';
import Share from '../components/aboutPage/Share';
import OurStory from '../components/aboutPage/OurStory';
import OurTeamSection from '../components/aboutPage/OurTeamSection';
import Container from '../components/UI/Container';
import ReferenceSection from '../components/UI/ReferenceSection';
import Partners from '../components/Partners/Partners';

const About = ({message}) => {
  return (
    <>
      <Cover />
      <Container>
        <OurStory />
      </Container>
      <OurTeamSection />
      <ReferenceSection/>
      <Container>
        <div className='text-[#025594]'>
        <Partners/>
        </div>
        <Share onClick={message}/>
      </Container>
    </>
  );
};

export default About;

