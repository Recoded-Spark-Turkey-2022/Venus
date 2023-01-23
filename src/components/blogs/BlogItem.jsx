import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import './blogs.css';
import { useNavigate } from 'react-router-dom';
import man from '../../assets/man.png';

const BlogItem = ({ data, fullWidth }) => {
  const navigate = useNavigate();
  const {
    ImageUrl,
    avatars,
    text,
    title,
    userName,

    userRef,
    upVote,
  } = data;

  return (
    <div
      className={`rounded blogItem
    overflow-hidden ${fullWidth ? 'w-[60%]' : 'max-w-[18rem]'}
    flex
 cursor-pointer
    flex-col
   justify-between
   brightness-100
   transition-all
   ease-in
   duration-500
   hover:brightness-75
     shadow-lg`}
      onClick={() => navigate(`/blogs/${userRef}`)}
      aria-hidden="true"
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
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={avatars[0] ? avatars[0] : man}
              className="rounded-full !w-[40px] aspect-square md:w-[70px] h-13"
              alt=""
            />
            <p className="text-xl inline-block">{userName} </p>
          </div>
          <span className="flex items-center justify-center z-30">
            <AiFillHeart className="text-rose text-2xl mr-1 " />
            <span className="text-lg font-medium">{upVote}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
