import React from 'react';
import './blogs.css';

const BlogItem = (props) => {
  const { ImageUrl, avatars, text, title, userName, fullWidth } = props;

  return (
    <div
      className={`rounded 
    overflow-hidden ${fullWidth ? 'w-[60%]' : 'max-w-[18rem]'}
    flex
 
    flex-col
   justify-between
     shadow-lg`}
    >
      <div className="grow-0">
        <img
          className={`w-full ${
            fullWidth ? 'aspect-[4/1] ' : 'aspect-[2/1.3]'
          } object-cover`}
          src={ImageUrl}
          alt=""
        />
      </div>
      <div className="grow flex flex-col justify-between">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title} </div>
          <p className="text-gray-700 text-base blog-text">{text}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center">
          <img src={avatars[0]} className="rounded-full w-[70px] h-13" alt="" />
          <p className="text-xl ">{userName} </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
