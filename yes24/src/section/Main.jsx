import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import frontImage from '../../src/assets/img/front.jpg';
import backImage from '../../src/assets/img/back.jpg';

const Main = () => {
  const slideItems = [frontImage, backImage];

  return (
    <div className='mainDiv'>
      <div className="line"></div>
      <div className="bookInfo">
        <b>오늘, 너에게</b>
        <span>: 최숙희 그림책 </span>
        <p>최숙희 글그림 웅진 주니어 2024년 09년 23일</p>
        <p>리뷰 16건 판매지수 19,500</p>
        <p>유아 19위 국내도서 top100 1주</p>
      </div>
      <div className="mainsec">
        <div className="mainSec1" style={{ width: '502px', height: '488px', overflow: 'hidden' }}>
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            style={{ width: '512px', height: '487px' }}
          >
            {slideItems.map((item, index) => (
              <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <img
                  src={item}
                  alt={`Slide ${index + 1}`}
                  className="slide_img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mainSec2" style={{ padding: '0px 20px', border: '1px solid #ccc', maxWidth: '502px', height:'487px' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#d9534f' }}>13,500원 <span style={{ fontSize: '16px', color: '#555' }}>(10% 할인)</span></p>
          <p>크레마머니 12,000원</p>
          <p>YES포인트 750원 (5% 적립)</p>
          <p>5만원 이상 구매 시 2천원 추가적립</p>
          <div style={{ backgroundColor: '#0073e6', color: 'white', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <p>앱 다운 시 1천원 상품권</p>
            <p style={{ fontSize: '12px' }}>마케팅 수신 동의 시 +600원</p>
          </div>
          <p>결제 혜택: 카드/간편결제 혜택을 확인하세요</p>
          <p>배송 안내: 서울특별시 영등포구 은행로 11(여의도동, 일신빌딩)</p>
          <p style={{ color: '#5cb85c', fontWeight: 'bold' }}>하루배송</p>
          <p>24시까지 주문하면 <b>내일(11/5, 화)</b> 도착 예정</p>
          <p>배송비: 유료 (도서 15,000원 이상 무료)</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
