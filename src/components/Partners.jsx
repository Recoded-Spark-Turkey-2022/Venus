import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Thumbs} from 'swiper';
import view from '../assets/Placeholder_view_vector.svg'
import 'swiper/swiper-bundle.css';
import '../index.css'


SwiperCore.use([Navigation, Pagination, Thumbs]);

function Partners(){
    const [thumbsSwiper] = useState(null);
    const slides = [];
    for (let i = 0; i < 16; i += 1) {
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <img
            src={view}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
          />
        </SwiperSlide>
      );}
      const thumbs = [];
      for (let i = 0; i < 16; i += 1) {
        thumbs.push(
          <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
            <img src={view}
              alt={`Thumbnail ${i}`}/>
          </SwiperSlide>
        );
      }

    return(
      <div>
        
        <div className='mt-4'>
            <div className='text-partners flex items-center justify-center text-xl font-bold'><h4>Our Partners</h4></div>
            <div className='mt-6'>
            <Swiper
        id="swiper"
        breakpoints={{
          320: {
            
            slidesPerView: 4,
          },
          576: {
            
            slidesPerView: 4,
          },
          768: {
            
            slidesPerView: 8,
          },
        }}
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        pagination
        spaceBetween={0}
        slidesPerView={8}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>
      </div>


        </div>
        </div>

    )

}
export default Partners;
