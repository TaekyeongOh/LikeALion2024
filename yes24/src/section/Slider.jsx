import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import banner1 from '../../src/assets/img/banner1.jpg'
import banner2 from '../../src/assets/img/banner2.jpg'
import banner3 from '../../src/assets/img/banner3.jpg'
import banner4 from '../../src/assets/img/banner4.jpg'
import banner5 from '../../src/assets/img/banner5.jpg'
import banner6 from '../../src/assets/img/banner6.jpg'


const Slider = () => {
  const slideItems = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className='banner'>
      <div className="bannerdiv">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slideItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt={`Slide ${index + 1}`}
              className="slide_img"
              style={{ width: '1024px', height: '150px'}}
            />          
            </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
    </div>
  );
};

export default Slider;