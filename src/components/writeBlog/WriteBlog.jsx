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

/* 
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
// import { addDoc, collection } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase.config";


const WriteBlogC=()=>{
    const [title, setTitle] = useState('');
    const [blogText, setBlogText] = useState('');
    const [banner, setBanner] = useState(null);
    
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const uploadBanner =async ()=>{

    }

  
  const blogCollectionRef = collection(db, 'blogs');
  const writeBlog = async ()=>{
    await addDoc(blogCollectionRef, {
        title,
        blogText,
        banner,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    })
    navigate("/userProfile")
  }
} 

const handleChangeBanner=(e)=>{
  console.log(e.target.files[0]);
  setBanner(e.target.files[0]);
} 




  return(
      <div className='w-full'>
      <form name="contact" className='flex flex-col justify-center md:justify-start ' >
      <div className="image-div flex flex-col  gap-2 my-2 text-darkGrey">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ /* }
        <label className="" htmlFor="image">Choose a banner image:</label>
        <input 
        className="bg-white px-3 py-2.5"
        type="file" 
        id="image" 
        accept="image/png, image/jpeg" 
        required
        onChange={handleChangeBanner}
        />
        
        </div>
        <div className='input-div flex flex-col  mt-5 gap-2 my-2 '>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ /* }
          <label className="text-darkGrey">
              Title:
          </label>
          <input 
          placeholder='Write Title' 
          required 
          onChange={(e)=> setTitle(e.target.value)}
      
          className="border-1 border border-darkGrey"/>
          </div>
          <div className='blog-div flex flex-col  mt-5 gap-2 my-2'>
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ /* }
          <label className="text-darkGrey">
              Blog:
          </label>
          <textarea 
          placeholder='Write Blog' 
          required 
          onChange={(e)=> setBlogText(e.target.value)}
          className='rounded-full border border-1 border-darkGrey'/>
          </div>
          <div className='flex justify-center md:justify-start items-center mt-2'>
          <button onClick={handleSubmit} id='mediumBlue-button' className='w-32 rounded-full mt-2 whitespace-nowrap py-2' type='submit'>Submit Blog</button>
          </div>
          </form>
          </div>
  )
}
export default WriteBlogC;

*/
