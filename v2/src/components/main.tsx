import React from "react";
import { Link } from "react-router-dom";
import "./main.css"

import { Container, Row, Col, Jumbotron } from "react-bootstrap";

function Main() {
  return (
    <Container>
      <Row style={{height: '100vh', marginTop: '-59px', justifyContent: 'center', alignItems: 'center'}}>
        <Col>
          <Jumbotron>
            <h1 className="display-4">GorakuList에 오신걸 환영합니다!</h1>
            <p className="lead"><small>GorakuList는 한국 오락실 리스트 사이트입니다.</small></p>
            <hr className="my-4" />
            <p>지역별, 기체별 검색을 진행하실 수 있습니다.</p>
            <p className="lead">
              <Link className="btn btn-primary btn-lg" to="/search" role="button">오락실 찾기!</Link>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;