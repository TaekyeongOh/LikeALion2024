import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Header = () => {
    return (

        <header id='header' role='banner'>
            <div className='backimg'>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                    <SwiperSlide><img src='../../img/Header_img1.svg' ></img></SwiperSlide>
                    <SwiperSlide><img src='../../img/Header_img2.svg' ></img></SwiperSlide>
                    <SwiperSlide><img src='../../img/Header_img3.svg' ></img></SwiperSlide>
                    <SwiperSlide><img src='../../img/Header_img4.svg' ></img></SwiperSlide>
                    <SwiperSlide><img src='../../img/Header_img.svg' ></img></SwiperSlide>
                </Swiper>  
            </div>


            <a>
                <img src='../../assets/img/HeaderLogo.svg' className='HeaderLogo'></img>
            </a>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/women'>
                            WOMEN
                            <img src="../../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/men'>
                            MEN
                            <img src="../../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/kids'>
                            KIDS
                            <img src="../../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/tennis'>
                            TENNIS
                            <img src="../../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/brand'>
                            BRAND
                            <img src="../../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header