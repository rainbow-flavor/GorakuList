import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './footer.css';

function Footer() {
  return (
    <footer className="container-fluid py-2">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="flex-grow-1">
          <img alt={''} src={logo} height="20vh" />
          <Link className="mb-0 text-dark d-inline-block" to="/"> GORAKULIST</Link>
        </div>
        <div className="mr-2">
          <Link className="btn btn-primary linkBtn"
            style={{ backgroundColor: '#55acee' }}
            to="https://twitter.com/GorakuList"
            role="button">
            <i className="fa fa-twitter"></i>
          </Link>
        </div>

        <div className="d-flex flex-wrap">
          <div>
            <Link to="/legal/toc"><small>이용 약관</small></Link> | <a href="/#"><small>개인정보취급방침</small></a>
          </div>
        </div>
        <div>
          <small>Copyright © 2021</small>
          <Link to="https://rainbow-flavor.github.io/GorakuList/"><small>GorakuList</small></Link>
          | <small>All rights reserved</small>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
