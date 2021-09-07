import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/gorakulist_logo.png';
import './footer.css';

function Footer() {
  return (
    <div className="text-center text-white" style={{backgroundColor: '#f6f6f6', width: '100%', position: 'fixed', bottom: 0}}>
      <div className="text-right text-dark p-3" style={{ backgroundColor: '#00000033', display:'flex', justifyContent: 'space-between' }}>
        <div className="copyright-left">
          <Link className="navbar-brand text-dark" to="/">
            <img src={logo} height="30vh" alt="/" /> GORAKULIST
          </Link>
          <a className="btn btn-primary linkBtn"
            style={{ backgroundColor: '#55acee' }}
            href="https://twitter.com/GorakuList"
            role="button"> <i className="fa fa-twitter"></i></a>
        </div>
        <div className="copyright-right">
          <div>
            <Link className="text-dark text-bold" to="/toc">이용 약관</Link> | <Link className="text-dark text-bold" to="/toc">개인정보취급방침</Link>
          </div>
          Copyright © 2021
          <Link className="text-dark text-bold" to="/">GorakuList</Link>
          | All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
