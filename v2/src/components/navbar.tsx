import React, { useRef } from 'react';
import logo from '../resources/gorakulist_logo.png';

function Nav() {
  const GorakuListRef = useRef();

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href={GorakuListRef.current}>
        <img src={logo} height="30vh" alt="/"/> GORAKULIST
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href={GorakuListRef.current}>홈 <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={GorakuListRef.current}>검색</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={GorakuListRef.current}>문의</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
