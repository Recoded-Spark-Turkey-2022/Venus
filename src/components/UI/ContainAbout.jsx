import React from 'react'
import About from '../about/About'
import Container from './Container' 

function ContainAbout() {
    return (
      <div data-testid='container-about' className='bg-inlightBlue'> 
       <Container>
        <About />
       </Container>
      </div>
    )
  }
  
  export default ContainAbout