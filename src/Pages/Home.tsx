import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="title-box">
            <h3>GorakuList 에 오신걸 환영합니다.</h3>
            <small>GorakuList는 한국 오락실 리스트 사이트입니다.</small>
          </div>
          <div className="custom-br"/>
          <div className="home-box">
            <p>지역별, 기체별 검색을 진행하실 수 있습니다.</p>
            <Link to="/search" role="button">오락실 찾기!</Link>
          </div>
        </div>
      </div>
    )
  }
}