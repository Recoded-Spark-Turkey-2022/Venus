import React from 'react';

import Bloglist from '../components/blogs/Bloglist';

import Container from '../components/UI/Container';

const Blogs = () => {
  return (
    <Container>
      <section className="min-h-screen">
        <Bloglist />
      </section>
    </Container>
  );
};

export default Blogs;
