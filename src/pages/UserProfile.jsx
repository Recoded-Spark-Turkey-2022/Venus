import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from "swiper";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 import { storage } from "../firebase/firebase.config";
import Form from '../components/form/Form'
import Container from "../components/UI/Container";
import BlogsCard from "../components/userProfile/BlogsCard";
import Avatar from '../components/userProfile/Avatar';
import article from '../data/Article'
import circleLogo from '../assets/signup-vector.svg';
import '../components/userProfile/userProfile.css'

const UserProfile = () => {

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
   
     const uploadFile = () => {
       const name = new Date().getTime() + file.name;
       console.log(name);
       const storageRef = ref(storage, `Avatars/${file.name}`);
       const uploadTask = uploadBytesResumable(storageRef, file);
 
       uploadTask.on(
         (error) => {
           console.log(error);
         },
         () => {
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
             setData((prev) => ({ ...prev, img: downloadURL }));
           });
         }
       );

     };
    
 
   console.log(data);

  const handleOpen= ()=>{
    setOpen(true);
  }

  const handleChangeFile= (e)=>{
    setFile(e.target.files[0]);
  }
   
    return (
        <div className="mt-20 flex items-center w-full  min-h-[90vh] relative overflow-hidden md:overflow-visible mb-0 md:mb-10">
          {open ? (
        <Form setOpen={setOpen} onChange={handleChangeFile} upload={uploadFile} file={file}/> ) : (
        
        <Container>
          <div className='relative z-10 flex justify-center object-center'>
         <Avatar name={article.userName} isOpen={handleOpen} file={file}/>
         </div>
           <img
        src={circleLogo}
        className="absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-500px] top-[0px]  w-[100%] h-[90vh]"
        alt="circle-logo"
      />
           <div id="blog-div" className="relative z-10 blog-swiper flex justify-center bg-transparent">
           <Swiper
     autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
      
    }}
      pagination={{
        clickable: true,  dynamicBullets: true 
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full" 
      >
        <SwiperSlide>
           <BlogsCard name={article.userName} file={file} title={article.title} text={article.text}/>
        </SwiperSlide>
        <SwiperSlide>
           <BlogsCard name={article.userName} file={file} title={article.title} text={article.text}/>
        </SwiperSlide>
        <SwiperSlide>
           <BlogsCard name={article.userName} file={file} title={article.title} text={article.text}/>
        </SwiperSlide>
        <SwiperSlide>
           <BlogsCard name={article.userName} file={file} title={article.title} text={article.text}/>
        </SwiperSlide>
           
           </Swiper>
           </div>
           
        </Container>
        
      )}
        </div>
    );
   
};

export default UserProfile;