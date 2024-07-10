import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'

const Home = () => {
  return (
    <Main
        title='태경태세문단세'
        description='옥택연'>
      <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
    </Main>
  )
}

export default Home
