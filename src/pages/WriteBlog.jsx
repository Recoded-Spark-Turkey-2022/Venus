import { useState } from "react";

const WriteBlog=()=> {

    const[title, setTitle]=useState('');
    const[blogText, setBlogText]=useState('');

    const submitBlog= ()=>{

    }

    return(
        <div className='flex flex-col justify-center bg-openRose mt-20 mx-auto w-full md:w-1/2 h-auto py-10 rounded-3xl drop-shadow-lg'>
        
        <h1 className=' font-bold text-3xl flex justify-center text-white'>Write a Blog</h1>
        <div className='flex flex-col justify-center items-center mt-5'>
          
          <div className='input-div flex flex-row items-start gap-2 my-2'>
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-white">
                Title:
            </label>
            <input placeholder='Write Title' required onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className='blog-div flex flex-row items-start gap-2 my-2'>
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-white">
                Blog:
            </label>
            <textarea placeholder='Write Blog' required onChange={(e)=> setBlogText(e.target.value)}/>
            </div>
            <button onClick={submitBlog} id='mediumBlue-button' className='rounded-2xl px-8 whitespace-nowrap py-1 mt-1' type='submit'>Submit Blog</button>
            </div> 
         
        </div>
       

    )
}

export default WriteBlog;