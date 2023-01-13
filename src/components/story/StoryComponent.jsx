import React from 'react';
import imageIcon from '../../assets/topViewLetters.jpg';
import userIcon from '../../assets/man.png';

const storyDetails = {
  mainImage: imageIcon,
  description:
    'How I learned Turkish quickly and what are the best places to learn.',
  user: {
    userImage: userIcon,
    userName: 'Ahmad Faysal',
    currentUserCountry: 'Turkey',
  },
};

export default function StoryComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-36 mt-[50px] md:mt-[78px] pb-[24px] mr-[80px] ml-[89px] md:mx-[0px]">
      <div>
        <img className="rounded" src={storyDetails.mainImage} alt="" />
      </div>
      <div className="flex-col text-[#ffffff] max-w-[400px] min-h-[140px]">
        <button
          type="button"
          className="bg-[#FEDB9B] rounded-[3px] text-[12px] text-[#4699C2] font-bold leading-4 tracking-[0.3px] px-[10px] py-[2px] mt-[17px] md:mt-[25px]"
        >
          Language
        </button>
        <p className="text-[18px] md:text-4xl font-light mt-[10px] md:mt-[20px] md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-[231px] md:max-w-[400px]">
          {storyDetails.description}
        </p>
        <div className="flex mt-[30px] md:mt-10" width={30}>
          <div className="bg-[#FEDB9B] rounded-full mr-[21px] self-center">
            <img
              className=" rounded-full w-[30px] h-[28px] md:w-[35px] md:h-[35px]"
              src={storyDetails.user.userImage}
              alt=""
            />
          </div>
          <div>
            <a href="#home" className="mb-[6px] font-bold text-[16px]">
              {storyDetails.user.userName}
            </a>
            <p className="font-light text-[14px] text-[#E9E9E9]">
              Refugee in {storyDetails.user.currentUserCountry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
