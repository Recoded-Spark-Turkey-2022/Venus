import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Thumbs} from 'swiper';
import World from '../assets/world_map_ 1.svg'
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

function Partners(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const slides = [];
    for (let i = 0; i < 16; i += 1) {
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <img
            src={World}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
          />
        </SwiperSlide>
      );}
      const thumbs = [];
      for (let i = 0; i < 16; i += 1) {
        thumbs.push(
          <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
            <img src={World}
              alt={`Thumbnail ${i}`}/>
          </SwiperSlide>
        );
      }

    return(
        <div>
            <div><h4>Our Partners</h4></div>
            <Swiper
        id="main"
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

    )

}
export default Partners;
