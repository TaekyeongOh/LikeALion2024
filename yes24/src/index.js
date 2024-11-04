import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Etc from '../src/section/Etc';
import Footer from '../src/section/Footer';
import Header from '../src/section/Header';
import Information from '../src/section/Information';
import Main from '../src/section/Main';
import Review from '../src/section/Review';
import Slider from '../src/section/Slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main />
    <Slider />
    <Information />
    <Review />
    <Etc />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
