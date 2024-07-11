import React from 'react'
import Main from '../components/section/Main'


import VideoCards from '../components/videos/VideoCards'
import { webdText } from '../data/webd'

const Webd = () => {
    return (
      <Main
      title='에스파'
      description='aespa'
      >
      <section id='webdPage'
    //    className={webdPageClass}
       >
                <h2>😄 강남대닝닝보세요</h2>
                <div className="video__inner">
                    <VideoCards videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd