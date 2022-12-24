import React from 'react'
import StoryComponent from '../StoryComponent'
import Container from './Container'

export default function StoriesSection() {
  return (
    <div className='bg-[#4699C2] '>
        <Container>
        <h1 className='text-[#ffffff] text-[54px] font-normal leading-[63px] mb-[19px] pt-[86px]'>Latest Stories</h1>
        <p className='text-[#ffffff] text-[18px] leading-[30px] max-w-[402px]'>Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>  
        <StoryComponent/>
        <StoryComponent/>
        </Container>
    </div>
  )
}
