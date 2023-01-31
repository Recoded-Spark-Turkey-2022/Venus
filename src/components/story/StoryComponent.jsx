import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import imageIcon from '../../assets/topViewLetters.jpg';
import userIcon from '../../assets/man.png';

// const storyDetails = {
//   mainImage: imageIcon,
//   description:
//     'How I learned Turkish quickly and what are the best places to learn.',
//   user: {
//     userImage: userIcon,
//     userName: 'Ahmad Faysal',
//     currentUserCountry: 'Turkey',
//   },
// };

export default function StoryComponent({ data }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 mt-[50px] md:mt-[78px] pb-[24px] md:mr-[40px] md:ml-[40px] md:mx-[0px]"
    >
      <div>
        <img
          className="rounded aspect-square h-[100%] md:h-[500px]  w-[100%]"
          src={data?.ImageUrl || imageIcon}
          alt=""
        />
      </div>
      <div className="flex-col text-[#ffffff]">
        <button
          type="button"
          onClick={() => navigate(`/blogs/${data?.userRef}`)}
          className="bg-[#FEDB9B] text-left rounded-[3px] text-[14px] relative duration-500 ease-in after:content-['&#x2192;'] after:absolute after:opacity-0 hover:after:opacity-100 after:duration-300 after:ease-in  hover:after:right-1 after:text-[20px] after:font-extrabold after:right-[0px] z-10 after:bottom-[6px]  hover:w-[8rem]  w-[6rem] text-[#4699C2] font-bold leading-4 tracking-[0.3px] px-[10px] py-[5px] mt-[17px] md:mt-[25px]"
        >
          Read More
        </button>

        <p className="text-[18px]  first-letter:uppercase  md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light mt-[10px] md:mt-[20px] md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          {data?.text}
        </p>
        <div className="flex mt-[30px] md:mt-10" width={30}>
          <div className="bg-[#FEDB9B] rounded-full mr-[21px] self-center">
            <img
              className=" rounded-full w-[30px] h-[28px] md:w-[35px] md:h-[35px]"
              src={data?.avatars[0] || userIcon}
              alt=""
            />
          </div>
          <div>
            <a href="#home" className="mb-[6px] font-bold text-[16px]">
              {data?.userName}
            </a>
            <p className="font-light text-[14px] text-[#E9E9E9]">
              Refugee in Turkey
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
