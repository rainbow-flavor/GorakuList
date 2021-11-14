import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './Essential';
import * as Pages from './Pages';

import "./index.scss";

ReactDOM.render(
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/cs" element={<Pages.Cs />} />
        <Route path="/search" element={<Pages.Search />} />
        <Route path="*" element={<Pages.NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </>,
  document.querySelector('#root')
)