import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { developerText } from '../data/developer';

const Home = () => {
    return (
        <Main 
            title = "택영"
            description="융보공">
            
            <Today />
            <Developer videos={developerText} title="😪 뉴진스" id="developer" />
            <VideoSlider videos={webdText} title="😮 에스파" id="webd" />
            <VideoSlider videos={websiteText} title="😛 블랙핑크" id="website" />
            <VideoSlider videos={gsapText} title="🤓 레드벨벳" id="gsap" />
        </Main>
    )
}

export default Home