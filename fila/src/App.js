import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Tennis from './pages/Tennis'
import Brand from './pages/Brand'
import Not from './pages/Not'

import Header from './components/section/Header'; 
import Main from './components/section/Main';   
import Footer from './components/section/Footer'; 

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/women' element={<Women />} />
          <Route path='/men' element={<Men />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/tennis' element={<Tennis />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App