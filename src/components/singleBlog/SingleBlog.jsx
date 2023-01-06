import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  AiOutlineShareAlt,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { Flip, toast, ToastContainer } from 'react-toastify';
import Container from '../UI/Container';
import { getAllListings } from '../../features/listings/listingSlice';
import BlogItem from '../blogs/BlogItem';
import './singleBlog.css';

const SingleBlog = ({ data }) => {
  const dataStore = useSelector(getAllListings);
  const [tooltip, setTooltip] = useState(true);
  const [date, setDate] = useState('');
  const randomNumber = Math.floor(Math.random() * dataStore.length) - 1;
  const randomNum1 = randomNumber > 0 ? randomNumber : 0;
  const randomNum2 = randomNumber > 0 ? randomNumber + 1 : 5;
  const randomArr = [];
  randomArr.push(dataStore[randomNum1]);
  randomArr.push(dataStore[randomNum2]);

  const { avatars, title, userName, text, content, ImageUrl, timeStamp } =
    data[0];

  console.log(timeStamp);
  const { seconds } = timeStamp;

  useEffect(() => {
    const output = new Date(seconds * 1000).toLocaleDateString();
    setDate(output);
  }, [seconds]);

  const currentUrl = window.location.href;
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setTooltip(!tooltip);
    toast.success('Link Coppied!', {
      position: 'top-left',
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const shareOnFacebook = () => {
    const facebookShare = 'https://www.facebook.com/sharer/sharer.php?u=';
    const navUrl = facebookShare + currentUrl;

    window.open(navUrl, '_blank');
  };
  const shareOnTwitter = () => {
    const twitterShare = 'https://twitter.com/intent/tweet?text=';
    const navUrl = twitterShare + currentUrl;

    window.open(navUrl, '_blank');
  };
  return (
    <Container>
      <div className="flex mt-[60px] flex-col gap-10 md:flex-row main-container">
        <article className="flex flex-col w-full md:w-[60%]">
          <h1 className="text-3xl uppercase font-medium text-center mb-4">
            {title}{' '}
          </h1>
          <div>
            <img
              className="w-[100%] object-cover rounded-xl"
              src={ImageUrl}
              alt={title}
            />
          </div>
          <div className="flex items-center justify-around my-2">
            <p className="flex  align-middle self-center justify-center items-end ">
              <span>by</span>{' '}
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={avatars[0]}
                alt="avatar"
              />{' '}
              <span> {userName} </span>
            </p>
            <div className=" flex  gap-5 ">
              <AiOutlineShareAlt
                onClick={handleCopy}
                className="text-darkBlue textShadow  text-3xl font-bold duration-300 brightness-110 hover:brightness-50 cursor-pointer"
              />
              <AiFillFacebook
                onClick={shareOnFacebook}
                className="text-darkBlue text-3xl font-bold duration-300 brightness-110 hover:brightness-50 cursor-pointer"
              />
              <AiOutlineTwitter
                onClick={shareOnTwitter}
                className="text-darkBlue text-3xl font-bold duration-300 brightness-110 hover:brightness-50 cursor-pointer"
              />
            </div>
            <div className="date flex gap-3 items-center">
              <FaCalendarAlt className="text-darkBlue textShadow  self-baseline text-3xl font-bold duration-300 brightness-110 hover:brightness-50" />
              <span className="self-baseline">{date} </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium my-3">{text} </h2>
            <p>{content} </p>
          </div>
        </article>
        <aside className="w-full md:w-[40%] h-fit ">
          <h2 className="text-2xl font-medium text-center mb-4">Read Also</h2>
          <div className="flex blog-aside flex-wrap justify-center gap-10 w-full blog-wrapper">
            {randomArr?.map((singlePost) => (
              <BlogItem
                key={singlePost.userRef}
                {...singlePost}
                // eslint-disable-next-line react/jsx-boolean-value
                fullWidth={true}
              />
            ))}
          </div>
        </aside>
      </div>
      <ToastContainer transition={Flip} />
    </Container>
  );
};

export default SingleBlog;
