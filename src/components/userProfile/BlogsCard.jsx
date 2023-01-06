import React from "react";

const BlogsCard = ({title,name,image,text})=> {

    return(
        <div className="bg-white max-w-sm flex justify-center rounded-3xl overflow-hidden shadow-md py-8 px-3 mb-2">
            <div className="text-xl mb-2 ">
                <div className="py-2">
            <p className="font-bold">{title}</p>
            </div>
            <div className="py-2">
            <p>{text}</p>
            </div>
            <div className="flex justify-start">
            <div className="max-w-[25%] bg-orange-500 justify-center items-center rounded-full">
                <img className="rounded-full" src={image} alt="Avatar of User" />
            </div>
                <p className="text-md text-mediumBlue pt-10 pl-5">{name}</p>
                </div>
    
          </div>
        </div>

    )
}
export default BlogsCard;