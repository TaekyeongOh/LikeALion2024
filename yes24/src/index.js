import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from '../src/section/Footer';
import Header from '../src/section/Header';
import Main from '../src/section/Main';
import Slider from '../src/section/Slider';
import Nav from '../src/section/Nav.jsx';
import ShoppingBar from '../src/section/ShoppingBar.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main />
    <Slider />
    <Nav /> 
    <Footer />
    <ShoppingBar />
  </React.StrictMode>
);

reportWebVitals();
