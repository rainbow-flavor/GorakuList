import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/gorakulist_logo.png';

function Nav() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} height="30vh" alt="/"/> GORAKULIST
      </Link>
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
            <Link className="nav-link" to="/">홈 <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">검색</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cs">문의</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
