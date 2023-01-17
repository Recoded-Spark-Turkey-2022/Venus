import { useRef  } from "react";


const WriteBlogC=()=>{
    const setTitle = useRef('');
  const setBlogText = useRef('');
  const setBanner= useRef('');

  /* const handleChangeBanner=(e)=>{
    console.log(e.target.files[0]);
    setBanner(e.target.files[0]);
} */


    const submitBlog= (e)=>{
        e.preventDefault();
 // Submit banner img, title, blog text with auth
    }
   

    return(
        <div className='w-full'>
        <form name="contact" className='flex flex-col justify-center md:justify-start ' onSubmit={submitBlog}>
        <div className="image-div flex flex-col  gap-2 my-2 text-darkGrey">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="" htmlFor="image">Choose a banner image:</label>
          <input 
          className="bg-white px-3 py-2.5"
          type="file" 
          id="image" 
          accept="image/png, image/jpeg" 
          required
          ref={setBanner}
          />
          
          </div>
          <div className='input-div flex flex-col  mt-5 gap-2 my-2 '>
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-darkGrey">
                Title:
            </label>
            <input 
            placeholder='Write Title' 
            required 
            ref={setTitle}
        
            className="border-1 border border-darkGrey"/>
            </div>
            <div className='blog-div flex flex-col  mt-5 gap-2 my-2'>
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="text-darkGrey">
                Blog:
            </label>
            <textarea 
            placeholder='Write Blog' 
            required 
            ref={setBlogText}
            className='rounded-full border border-1 border-darkGrey'/>
            </div>
            <div className='flex justify-center md:justify-start items-center mt-2'>
            <button onClick={submitBlog} id='mediumBlue-button' className='w-32 rounded-full mt-2 whitespace-nowrap py-2' type='submit'>Submit Blog</button>
            </div>
            </form>
            </div>
    )
}
export default WriteBlogC;
