import React from 'react';
import imageIcon from "../assets/topViewLetters.jpg"
import userIcon from "../assets/man.png"

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
    <div className="flex flex-wrap justify-between mt-[78px] pb-[24px] ">
      <div>
        <img className='rounded' src={storyDetails.mainImage} alt="" />
      </div>
      <div className='flex-col text-[#ffffff] max-w-[400px] min-h-[140px]'>
        <button  type="button" className='bg-[#FEDB9B] rounded-[3px] text-[10px] text-[#4699C2] px-[10px] py-[2px] mt-[25px]'>Language</button>
        <p className='text-4xl font-light mt-[18px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>{storyDetails.description}</p>
        <div className='flex mt-10 mb-5' width={30}>
          <div className="bg-[#FEDB9B] rounded-full mr-[21px] self-center">
            <img  className=' rounded-full w-[35px] height-[35px]' src={storyDetails.user.userImage} alt=""/>
          </div>
          <div>
            <a href="#home" className='mb-[6px] font-bold text-[14px]'>{storyDetails.user.userName}</a>
            <p className='font-light text-[12px] text-[#E9E9E9]'>Refugee in {storyDetails.user.currentUserCountry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
