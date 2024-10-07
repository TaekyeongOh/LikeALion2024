import React from 'react'
import banner from '../../assets/img/icon/banner.svg'
import '../../assets/scss/section/_section.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerBanner'>
                <img src={banner}/>
            </div>
        </div>
    )
}

export default Header