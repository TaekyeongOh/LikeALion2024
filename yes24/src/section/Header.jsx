import React from 'react';
import '../assets/scss/style.scss';
import h_nav from '../../src/assets/img/hNav.svg';
import search from '../../src/assets/img/search.svg';
import Logo from '../../src/assets/img/ani_logo_PC_nobel.gif';

const Header = () => {
  return (
    <div className='headerDiv'>
      <div className="h_sec1">
        <div className="h_nav">
          <img src={h_nav} alt="hNav"/>
        </div>
        <div className="logo">
          <img className='h_logo' src={Logo} />
        </div>
        <div className="cart">

        </div>
      </div>
      <div className="h_sec2">
        <div className="search">
          <input placeholder='서울대 출신 수학박사의 흥미진진 수학 동화' />
          <div className="searchImg">
            <img src={search} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
