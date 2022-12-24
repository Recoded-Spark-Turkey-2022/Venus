import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, EffectCoverflow } from "swiper";
import p1 from '../assets/1.png'
import p2 from '../assets/2.png'
import p3 from '../assets/3.png'
import p4 from '../assets/4.png'
import p5 from '../assets/5.png'
import p6 from '../assets/6.png'
import p7 from '../assets/7.png'
import p8 from '../assets/8.png'
import 'swiper/swiper-bundle.css';
import '../index.css'
import '../Partners.css'



function Partners(){
   
    return(
      <div>
        
        <div className='mt-4'>
            <div className='text-partners flex items-center justify-center text-xl font-bold'><h4>Our Partners</h4></div>
            <div className='flex justify-center  items-center w-full mt-5'>
            <Swiper
        
        effect="coverflow"
       
        centeredSlides='true'
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,  dynamicBullets: true 
        }}
        spaceBetween={0}
        slidesPerView={4}
        className="mySwiper"
        modules={[Pagination, EffectCoverflow]}
        
      >
         <SwiperSlide>
          <div className=''>
            <img   className=" w-full md:w-1/2 mx-auto" src={p1} alt=''/>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className=''>
            <img  className=" w-full md:w-1/2 mx-auto" src={p2} alt=''/>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className=''>
            <img  className=" w-full md:w-1/2 mx-auto" src={p3} alt=''/>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className=''>
            <img  className=" w-full md:w-1/2 mx-auto" src={p4} alt=''/>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className=''>
            <img  className=" w-full md:w-1/2 mx-auto" src={p5} alt=''/>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className=''>
            <img  className=" w-full md:w-1/2 mx-auto" src={p6} alt=''/>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className=''>
            <img  className=" w-full md:w-1/2 mx-auto" src={p7} alt=''/>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className=''>
            <img  className=" w-full md:w-1/2 mx-auto" src={p8} alt=''/>
          </div>
         </SwiperSlide>
        
      </Swiper>
      </div>
      </div>


        </div>
        

    )

}
export default Partners;
