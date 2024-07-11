import React from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { gsapText } from '../data/gsap'

const Gsap = () => {
  return (
    <Main
      title='레드벨벳'
      description='redvelvet'
    >
      <section id='gsapPage' 
      // className={gsapPageClass}
      >
        <h2>😄 더 자고싶다</h2>
        <div className="video__inner">
          <VideoCards videos={gsapText} />
        </div>
      </section>

    </Main>
  )
}

export default Gsap
