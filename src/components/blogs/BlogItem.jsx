import React from 'react';
import avatarMale from '../../assets/blog-images/male-avatar.svg';
import blog1 from '../../assets/blog-images/blog-1.jpg';

const BlogItem = () => {
  return (
    <div className="rounded overflow-hidden max-w-[20rem] shadow-lg">
      <img className="w-full" src={blog1} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">We breathe Together</div>
        <p className="text-gray-700 text-base">
          “A refugee is someone who survived and who can create the future.”
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-around">
        <img src={avatarMale} className="rounded-full w-[70px] h-13" alt="" />
        <p className="text-xl ">Martin L.</p>
      </div>
    </div>
  );
};

export default BlogItem;
