import React from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { websiteText } from '../data/website'

const Website = () => {
    return (
        <Main
            title='블랙핑크'
            description='blackpink'
        >
            <section id='websitePage' className={websitePageClass}>
                <h2>😄 졸리다</h2>
                <div className="video__inner">
                    <VideoCards videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website