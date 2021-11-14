import React from "react";
import "./Footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="logo-wrap">
          <img className="gl-logo" src="/resources/gl_logo.svg" height="30vh" />
          <p> GORAKULIST</p>
          <a href="https://twitter.com/GorakuList" role="button">
            <img 
              className="twitter-logo"
              src="/resources/twitter_logo.svg" 
              width="35%" 
              alt=""/>
          </a>
        </div>
        <div className="privacy">
          <div className="privacy-pages">
            <a href="/legal/toc.html"><small>이용 약관</small></a> | <a
              href="/legal/privacy.html"><small>개인정보취급방침</small></a>
          </div>
          <div className="copyright">
            <small>&nbsp;&nbsp;Copyright © 2021</small>
            <a href="/"><small>GorakuList</small></a>
            {" | "}<small>All rights reserved</small>
          </div>
        </div>
      </footer>
    );
  }
}