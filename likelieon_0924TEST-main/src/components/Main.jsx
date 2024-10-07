import React from 'react'
import Slider from './Section/Slider'
import introduceVideo from '../assets/img/png/introduce.png'
import '../assets/scss/section/_section.scss'
import Notification from './Section/Notification'


const Main = () => {
    return (
        <div className='Main_wrap container'>
            <Slider />
            <Notification />
            Main
            <div className="introduceVideo">
                <img src={introduceVideo} />
            </div>
        </div>
    )
}

export default Main