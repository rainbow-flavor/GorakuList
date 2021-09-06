import React, { useRef } from 'react';
import logo from '../resources/gorakulist_logo.png';
import './footer.css';

function Footer() {
  const GorakuListRef = useRef();

  return (
    <div className="text-center text-white" style={{backgroundColor: '#f6f6f6', width: '100%', position: 'fixed', bottom: 0}}>
      <div className="text-right text-dark p-3" style={{ backgroundColor: '#00000033', display:'flex', justifyContent: 'space-between' }}>
        <div className="copyright-left">
          <h2 className="navbar-brand text-dark" ref={GorakuListRef.current}>
            <img src={logo} height="30vh" alt="/" /> GORAKULIST
          </h2>
          <a className="btn btn-primary linkBtn"
            style={{ backgroundColor: '#55acee' }}
            href="https://twitter.com/GorakuList"
            role="button">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="copyright-right">
          <div>
            <a className="text-dark text-bold" href={GorakuListRef.current}>이용 약관</a> | <a className="text-dark text-bold" href={GorakuListRef.current}>개인정보취급방침</a></div>
          Copyright © 2021
          <a className="text-dark text-bold" href={GorakuListRef.current}>GorakuList</a>
          | All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
