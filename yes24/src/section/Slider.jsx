import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
  const slideItems = [front, back]

  return (
    <div>
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
              <img src={item} alt={`Slide ${index + 1}`} className="slide_img" />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Slider
