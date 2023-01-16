import React from 'react';
import { useTranslation } from 'react-i18next';
import StoryComponent from '../story/StoryComponent';


import Container from './Container';

export default function StoriesSection() {
  const { t }= useTranslation();
  return (
    <div className="bg-[#4699C2] ">
      <Container>
        <h1 className="text-[#ffffff] font-normal  mb-[19px] pt-[28px] md:pt-[86px] text-[18px]  md:text-[54px] leading-[19px] md:leading-[63px] text-center md:text-left">
        {t("Home.last-stories")}
        </h1>
        <p className="text-[#ffffff] text-[16px] md:text-[18px] leading-[30px] max-w-[402px] text-center md:text-left">
        {t("Home.last-stories-p")}
        </p>
        <StoryComponent />
        <StoryComponent />
      </Container>
    </div>
  );
}
