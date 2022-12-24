import React from 'react';

const BlogItem = (props) => {
  const { ImageUrl, avatars, text, title, userName } = props;

  return (
    <div
      className="rounded 
    overflow-hidden max-w-[18rem]
    flex
 
    flex-col
   justify-between
     shadow-lg"
    >
      <div className="">
        <img
          className="w-full aspect-square object-cover"
          src={ImageUrl}
          alt=""
        />
      </div>
      <div className="">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title} </div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-around">
          <img src={avatars[0]} className="rounded-full w-[70px] h-13" alt="" />
          <p className="text-xl ">{userName} </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
