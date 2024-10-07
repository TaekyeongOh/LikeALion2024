import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/section/_section.scss';
import home from '../../assets/img/icon/home.svg';
import heart from '../../assets/img/icon/like.svg';
import search from '../../assets/img/icon/search.svg';
import mypage from '../../assets/img/icon/mypage.svg';
import homefull from '../../assets/img/icon/homefull.svg';
import heartfull from '../../assets/img/icon/likefull.svg';
import searchfull from '../../assets/img/icon/searchfull.svg';
import mypagefull from '../../assets/img/icon/mypagefull.svg';

const Nav = () => {
    const [active, setActive] = useState('home'); // 'home' is the default active button
    const navigate = useNavigate(); // Allows navigation to different routes

    const handleNavClick = (page) => {
        setActive(page); // Set the active button
        switch (page) {
            case 'home':
                navigate('/'); // Navigate to home (main)
                break;
            case 'heart':
                navigate('/like'); // Navigate to like page
                break;
            case 'search':
                navigate('/search'); // Navigate to search page
                break;
            case 'mypage':
                navigate('/mypage'); // Navigate to mypage
                break;
            default:
                break;
        }
    };

    return (
        <div className='nav'>
            <div className="Bmain Bnav" onClick={() => handleNavClick('home')}>
                <img src={active === 'home' ? homefull : home} alt="home" />
            </div>
            <div className="Bheart Bnav" onClick={() => handleNavClick('heart')}>
                <img src={active === 'heart' ? heartfull : heart} alt="heart" />
            </div>
            <div className="Bsearch Bnav" onClick={() => handleNavClick('search')}>
                <img src={active === 'search' ? searchfull : search} alt="search" />
            </div>
            <div className="Bmypage Bnav" onClick={() => handleNavClick('mypage')}>
                <img src={active === 'mypage' ? mypagefull : mypage} alt="mypage" />
            </div>
        </div>
    );
}

export default Nav;
