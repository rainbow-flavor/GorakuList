import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/navbar';
import Footer from './components/footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
