import React from "react";
import Animated from "animated/lib/targets/react-dom";
import Easing from "animated/lib/Easing";

import stateList from "../data/stateList.json";
import gameList from "../data/gameList.json";

import "./Search.scss";

const SearchDetails: React.FC<{show: boolean}> = ({ show }) => {
  const gameGenreToKorean = {
    rhythm: "리듬",
    fighting: "격투",
    racing: "레이싱",
    shooting: "슈팅",
    action: "액션",
    casual: "퍼즐/캐주얼/스포츠",
    etc: "기타"
  }

  return (
    <div className="collapse" style={{ animation: `${show ? "slideDown" : "slideUp"} 1s ease-in-out forwards` }}>
      <div className="and-or">
        검색 조건
        <label><input id="or" type="radio" name="and-or"/>or</label>
        <label><input id="and" type="radio" name="and-or"/>and</label>
      </div>
      <ul className="game-list">
        {Object.entries(gameList).map(([key, value]) => (
          <li key={key} className="game-item">
            <span className={`${key} game-genre`}>{gameGenreToKorean[key]}</span>
            <div className="game-detail-list">
              {value.map((game) => (
                <label key={game.id}>
                  <input type="checkbox" name={game.name}/>
                  {game.name}
                </label>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default class Search extends React.Component<{}, {showDetail: boolean}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showDetail: false
    }
  }

  render() {
    return (
      <div id="search">
        <div className="container">
          <div>
            <h5 id="search-title">오락실 검색</h5>
            <p id="search-subtitle">아래에 조건을 입력해주세요</p>
          </div>
          <div className="select-options">
            <select id="state" name="state">
              <option value="">전국</option>
              {stateList.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
              <option value="기타">기타</option>
            </select>
            <select id="city" name="city">
              <option value="전체">전체</option>
            </select>
            <button className="btn-search" type="button">검색</button>
          </div>
          <button 
            className="btn-open-detail" 
            type="button" 
            onClick={(e) => this.setState({ showDetail: !this.state.showDetail })}
          >
            상세 검색
          </button>
          <SearchDetails show={this.state.showDetail}/>
          <div className="search-results">
            <h2 id="no-searched">No Searched</h2>
          </div>
        </div>
      </div>
    )
  }
}