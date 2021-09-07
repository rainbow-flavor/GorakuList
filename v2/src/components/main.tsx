import React from "react";
import { Link } from "react-router-dom";
import "./main.css"

function Main() {
  return (
    <div className="container">
      <div id="main-thumbnail" className="row justify-content-center align-content-center">
        <div className="jumbotron">
          <h1 className="display-4">GorakuList에 오신걸 환영합니다!</h1>
          <p className="lead">GorakuList는 한국 오락실 리스트 사이트입니다.</p>
          <hr className="my-4" />
          <p>지역별, 기체별 검색을 진행하실 수 있습니다.</p>
          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="/search" role="button">오락실 찾기!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;