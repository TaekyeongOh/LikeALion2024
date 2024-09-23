import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section01 = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    rtl: false,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    rtl: false,
  };

  return (
    <div className='sec01'>
      <div className='sec01-left' key="slider1">
        <div className="txt-box">
          <h2 className='ft_gia'>2022 개정<br /> 교육과정 교과서</h2>
          <p>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
          {/* <Slider {...settings2} key="slider-left">
            <div>
              <div style={{
                backgroundColor: 'red',
                backgroundPosition: 'center',
                width: '320px',
                height: '415px',
              }}></div>
            </div>
            <div>
              <div style={{
                backgroundColor: 'blue',
                backgroundPosition: 'center',
                width: '320px',
                height: '415px',
              }}></div>
            </div>
            <div>
              <div style={{
                backgroundColor: 'yellow',
                backgroundPosition: 'center',
                width: '320px',
                height: '415px',
              }}></div>
            </div>
            <div>
              <div style={{
                backgroundColor: 'lightblue',
                backgroundPosition: 'center',
                width: '320px',
                height: '415px',
              }}></div>
            </div>
          </Slider> */}
        </div>
      </div>
      <div className="sec01-right" key="slider2">
        <Slider {...settings} key="slider-right">
          <div>
            <div style={{
              backgroundImage: 'url(https://textbook.jihak.co.kr/img/bg_mvsimg6.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '800px',
              borderRadius: '300px 0px 300px 0px'
            }}></div>
          </div>
          <div>
            <div style={{
              backgroundImage: 'url(https://textbook.jihak.co.kr/img/bg_mvsimg5.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '800px',
              borderRadius: '300px 0px 300px 0px'
            }}></div>
          </div>
          <div>
            <div style={{
              backgroundImage: 'url(https://textbook.jihak.co.kr/img/bg_mvsimg4.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '800px',
              borderRadius: '300px 0px 300px 0px'
            }}></div>
          </div>
          <div>
            <div style={{
              backgroundImage: 'url(https://textbook.jihak.co.kr/img/bg_mvsimg3.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '800px',
              borderRadius: '300px 0px 300px 0px'
            }}></div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Section01;
