import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AiOutlineShareAlt,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Flip, toast, ToastContainer } from 'react-toastify';
import Container from '../UI/Container';
import { getAllListings } from '../../features/listings/listingSlice';
import BlogItem from '../blogs/BlogItem';
import './singleBlog.css';

const SingleBlog = ({ data }) => {
  const dataStore = useSelector(getAllListings);
  const [tooltip, setTooltip] = useState(true);
  const randomNumber = Math.floor(Math.random() * dataStore.length) - 1;
  const randomNum1 = randomNumber > 0 ? randomNumber : 0;
  const randomNum2 = randomNumber > 0 ? randomNumber + 1 : 5;
  const randomArr = [];
  randomArr.push(dataStore[randomNum1]);
  randomArr.push(dataStore[randomNum2]);

  const { avatars, title, userName, text, content, ImageUrl } = data[0];

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
      <div className="flex flex-col-reverse gap-10 md:flex-row main-container">
        <article className="flex flex-col w-full md:w-[60%]">
          <h1 className="text-3xl uppercase font-medium text-center mb-4">
            {title}{' '}
          </h1>
          <div className="relative">
            <img
              className="w-[90%] object-cover rounded-xl"
              src={ImageUrl}
              alt={title}
            />
            <div className=" flex flex-col gap-5 absolute top-6 right-0">
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
          </div>
          <p className="flex  align-middle self-center justify-center items-end mb-5">
            <span>by</span>{' '}
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={avatars[0]}
              alt="avatar"
            />{' '}
            <span> {userName} </span>
          </p>
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
