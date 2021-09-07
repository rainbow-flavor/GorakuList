import React from 'react';
import Select from 'react-select';

import './search.css';

const option1 = [
  { value: '전국', label: '전국' },
  { value: '서울', label: '서울' },
  { value: '부산', label: '부산' },
  { value: '대구', label: '대구' },
  { value: '인천', label: '인천' },
  { value: '광주', label: '광주' },
  { value: '대전', label: '대전' },
  { value: '울산', label: '울산' },
  { value: '세종', label: '세종' },
  { value: '경기북부', label: '경기북부' },
  { value: '경기남부', label: '경기남부' },
  { value: '강원', label: '강원' },
  { value: '충북', label: '충북' },
  { value: '충남', label: '충남' },
  { value: '전북', label: '전북' },
  { value: '전남', label: '전남' },
  { value: '경북', label: '경북' },
  { value: '경남', label: '경남' },
  { value: '제주', label: '제주' }
]

const option2 = [
  { value: '전체', label: '전체' }
]

function Search() {
  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h5 className="display-5" id="search-title">오락실 검색</h5>
            <p className="lead" id="search-subtitle">아래에 조건을 입력해주세요</p>
          </div>
        </div>
        <div className="row justify-content-between align-items-center" id="search-combo">
          <div className="col-4 pr-1">
            <Select id="city1" name="city1" options={option1} data-width="100%"/>
          </div>
          <div className="col-4 px-1">
            <Select id="city2" name="city2" options={option2} data-width="100%" data-none-selected-text="전체"/>
          </div>
          <div className="col-4 pl-1">
            <button type="button" className="btn btn-outline-dark">검색</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-2">
            <button className="btn btn-light w-100" type="button"
              data-toggle="collapse" data-target="#detail-content"
              aria-expanded="false" aria-controls="detail-content">
              상세 검색
            </button>
            <div className="collapse" id="detail-content" style={{marginTop: '1vh'}}>
              <small>
                <ul className="list-group list-group-flush">
                  <li id="game1" className="list-group-item py-1"><span className="badge bg-danger" style={{color: 'white'}}>리듬</span></li>
                  <li id="game2" className="list-group-item py-1"><span className="badge bg-warning" style={{color: 'white'}}>격투</span></li>
                  <li id="game3" className="list-group-item py-1"><span className="badge bg-success" style={{color: 'white'}}>레이싱</span></li>
                  <li id="game4" className="list-group-item py-1"><span className="badge bg-info" style={{color: 'white'}}>슈팅</span></li>
                  <li id="game5" className="list-group-item py-1"><span className="badge bg-primary" style={{color: 'white'}}>액션</span></li>
                  <li id="game6" className="list-group-item py-1"><span className="badge bg-secondary" style={{color: 'white'}}>퍼즐/캐쥬얼/스포츠</span></li>
                  <li id="game7" className="list-group-item py-1"><span className="badge bg-dark" style={{color: 'white'}}>기타</span></li>
                </ul>
              </small>
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-center align-items-center" style={{height: '30vh'}}>
          <div className="col text-center">
            <h2>No Searched</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;