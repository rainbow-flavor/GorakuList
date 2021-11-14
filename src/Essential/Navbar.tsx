import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/" className="title">
          <img src="/resources/gl_logo.svg" height="30vh" />GORAKULIST
        </Link>
        <div id="navigation">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/search">검색</Link>
            </li>
            <li>
              <Link to="/cs">문의</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}