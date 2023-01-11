import { useState } from "react";

const WriteBlogC=()=>{

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
        <div className='w-full'>
        <form name="contact" className='flex flex-col justify-center md:justify-start mt-5 ' onSubmit={submitBlog}>
        <div className="image-div flex flex-col justify-center md:justify-start mt-5 gap-2 my-2 text-darkGrey">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="" htmlFor="image">Choose a banner image:</label>
          <input 
          type="file" 
          id="image" 
          name="image" 
          accept="image/png, image/jpeg" 
          required
          onChange={handleChangeBanner}/>
          </div>
          <div className='input-div flex flex-col justify-center md:justify-start mt-5 gap-2 my-2 '>
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-darkGrey">
                Title:
            </label>
            <input 
            placeholder='Write Title' 
            required 
            onChange={(e)=> setTitle(e.target.value)} 
            className="border-1 p-2 rounded-2xl border border-darkGrey"/>
            </div>
            <div className='blog-div flex flex-col justify-center md:justify-start mt-5 gap-2 my-2'>
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-darkGrey">
                Blog:
            </label>
            <textarea 
            placeholder='Write Blog' 
            required 
            onChange={(e)=> setBlogText(e.target.value)}
            className='p-2 rounded-full border border-1 border-darkGrey'/>
            </div>
            <button onClick={submitBlog} id='mediumBlue-button' className='w-32 rounded-full mt-2 whitespace-nowrap py-2' type='submit'>Submit Blog</button>
            </form>
            </div>
    )
}
export default WriteBlogC;
