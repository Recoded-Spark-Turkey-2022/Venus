import React from 'react'
import StoryComponent from '../StoryComponent'
import Container from './Container'

export default function StoriesSection() {
  return (
    <div className='bg-[#4699C2] '>
        <Container>
        <h1 className='text-[#ffffff] font-normal  mb-[19px] pt-[28px] md:pt-[86px] text-[18px]  md:text-[54px] leading-[19px] md:leading-[63px] text-center md:text-left'>Latest Stories</h1>
        <p className='text-[#ffffff] text-[16px] md:text-[18px] leading-[30px] max-w-[402px] text-center md:text-left'>Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>  
        <StoryComponent/>
        <StoryComponent/>
        </Container>
    </div>
  )
}
