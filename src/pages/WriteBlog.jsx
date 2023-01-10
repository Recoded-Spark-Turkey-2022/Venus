import { useState } from "react";


const WriteBlog=()=> {

    const[title, setTitle]=useState('');
    const[blogText, setBlogText]=useState('');
    const[banner, setBanner]=useState(null);

    const submitBlog= (e)=>{
        e.preventDefault();
 // Submit banner img, title, blog text with auth
    }
    const handleChangeBanner=(e)=>{
        console.log(e.target.files[0]);
        setBanner(e.target.files[0]);
    }

    return(
        <div className='flex flex-col justify-center bg-openRose mt-20 mx-auto w-full md:w-1/2 h-auto py-10 rounded-3xl drop-shadow-lg'>
        
        <h1 className=' font-bold text-3xl flex justify-center text-white'>Write a Blog</h1>
        <div className='flex flex-col justify-center items-center mt-5 px-10'>
          <div className="image-div flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start items-start gap-2 my-2 text-white">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="image">Choose a banner image:</label>
          <input 
          type="file" 
          id="image" 
          name="image" 
          accept="image/png, image/jpeg" 
          required
          onChange={handleChangeBanner}/>
          </div>
          <div className='input-div flex flex-row items-start gap-2 my-2 '>
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-white">
                Title:
            </label>
            <input 
            placeholder='Write Title' 
            required 
            onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className='blog-div flex flex-row items-start gap-2 my-2'>
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-white">
                Blog:
            </label>
            <textarea 
            placeholder='Write Blog' 
            required 
            onChange={(e)=> setBlogText(e.target.value)}/>
            </div>
            <button onClick={submitBlog} id='mediumBlue-button' className='rounded-2xl px-8 whitespace-nowrap py-1 mt-1' type='submit'>Submit Blog</button>
            </div> 
         
        </div>
       

    )
}

export default WriteBlog;