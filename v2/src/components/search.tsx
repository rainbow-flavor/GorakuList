import React from 'react';
import Select from 'react-select';
import { Collapse } from 'react-collapse';

// import LocalAddr from './LocalAddr.json';

import './search.css';

type LocalAddrType = {
  [prop: string]: string[];
}

const LocalAddr: LocalAddrType = {
  kwd: ["강릉", "고성", "동해", "삼척", "속초", "양구", "양양", "영월", "원주", "인제", "정선", "철원", "춘천", "태백", "평창", "홍천", "화천"],
  ggn: ["과천", "광명", "광주", "군포", "김포", "부천", "성남", "수원", "시흥", "안산", "안성", "안양", "양평", "여주", "오산", "용인", "의왕", "이천", "평택", "하남", "화성"],
  ggb: ["가평", "고양", "구리", "남양주", "동두천", "양주", "연천", "의정부"],
  gsn: ["거창", "고성", "김해", "남해", "밀양", "사천", "산청", "양산", "의령", "진주", "창녕", "창원", "통영", "하동", "함안", "함양", "합천"],
  gsb: ["경산", "경주", "고령", "구미", "군위", "김천", "문경", "봉화", "상주", "성주", "안동", "영덕", "영양", "영주", "영천", "예천", "울릉", "울진", "의성", "청도", "청송", "칠곡", "포항"],
  gjg: ["광산", "남구", "동구", "북구", "서구"],
  dgg: ["남구", "달서", "달성", "동구", "북구", "서구", "수성", "중구"],
  djg: ["대덕", "동구", "서구", "유성", "중구"],
  bsg: ["강서", "금정", "기장", "남구", "동구", "동래", "부산진", "북구", "사상", "사하", "서구", "수영", "연제", "영도", "중구", "해운대"],
  sut: ["강남", "강동", "강북", "강서", "관악", "광진", "구로", "금천", "노원", "도봉", "동대문", "동작", "마포", "서대문", "서초", "성동", "성북", "송파", "양천", "영등포", "용산", "은평", "종로", "중구", "중랑"],
  usg: ["남구", "동구", "울주", "중구"],
  icg: ["강화", "계양", "남동", "동구", "미추홀", "부평", "서구", "연수", "옹진", "중구"],
  jln: ["강진", "고흥", "곡성", "광양", "구례", "나주", "담양", "목포", "무안", "보성", "순천", "신안", "여수", "영광", "영암", "완도", "장성", "장흥", "진도", "함평", "해남", "화순"],
  jlb: ["고창", "군산", "김제", "남원", "무주", "부안", "순창", "완주", "익산", "임실", "장수", "전주", "정읍", "진안"],
  ccn: ["계룡", "공주", "금산", "논산", "당진", "보령", "부여", "서산", "서천", "아산", "예산", "천안", "청양", "태안", "홍성"],
  ccb: ["괴산", "단양", "보은", "영동", "옥천", "음성", "제천", "증평", "진천", "청주", "충주"],
  sjs: ["조치원읍", "행정중심복합도시"],
}

const game1 = [{ 'id': '100', 'name': 'WACCA' },
{ 'id': '101', 'name': 'beatmania' },
{ 'id': '102', 'name': 'DANCERUSH' },
{ 'id': '103', 'name': 'DDR' },
{ 'id': '104', 'name': 'EZ2AC' },
{ 'id': '105', 'name': 'GITADORA' },
{ 'id': '106', 'name': 'maimai' },
{ 'id': '107', 'name': '비트세이버' },
{ 'id': '108', 'name': '비트온' },
{ 'id': '109', 'name': '사운드 볼텍스' },
{ 'id': '110', 'name': 'jubeat' },
{ 'id': '111', 'name': '태고의 달인' },
{ 'id': '112', 'name': '펌프 잇 업' }]
const game2 = [{ 'id': '300', 'name': '킹 오브 파이터즈' },
{ 'id': '301', 'name': '철권' }]
const game3 = [{ 'id': '400', 'name': '오버테이크' },
{ 'id': '401', 'name': '이니셜D' }]
const game4 = [{ 'id': '500', 'name': 'BB탄 사격' },
{ 'id': '501', 'name': '다크 이스케이프 4D' },
{ 'id': '502', 'name': '하우스 오브 데드' },
{ 'id': '503', 'name': '데드스톰 파이레츠' },
{ 'id': '504', 'name': '타임 크라이시스' },
{ 'id': '505', 'name': '렛츠 고 정글' },
{ 'id': '506', 'name': '로스트 랜드 어드벤처' },
{ 'id': '507', 'name': '스트라이커즈' },
{ 'id': '508', 'name': '워터슛' },
{ 'id': '509', 'name': '좀비 워즈' },
{ 'id': '510', 'name': '판타지 반반' },
{ 'id': '511', 'name': '트랜스포머' }]
const game5 = [{ 'id': '600', 'name': '버블 메모리즈' },
{ 'id': '601', 'name': '버블보블' },
{ 'id': '602', 'name': '스노우 브라더스' }]
const game6 = [{ 'id': '700', 'name': '갈스패닉' },
{ 'id': '701', 'name': '아타리 테트리스' },
{ 'id': '702', 'name': '비시바시' },
{ 'id': '703', 'name': '딥 씨 파티' },
{ 'id': '704', 'name': '픽셀크래프트' },
{ 'id': '705', 'name': '해머' },
{ 'id': '706', 'name': '히든 캐치' },
{ 'id': '707', 'name': '비트 앤 덩크' },
{ 'id': '708', 'name': '더 악력' },
{ 'id': '709', 'name': '패스트트랙' },
{ 'id': '710', 'name': '드래곤 펀치' }]
const game7 = [{ 'id': '900', 'name': 'VR존' },
{ 'id': '901', 'name': '부스형 노래방' },
{ 'id': '902', 'name': '뽑기' },
{ 'id': '903', 'name': '스티커 사진기' }]

function getGameListComponent(gameList: { id: string, name: string }[]) {
  return gameList.map((game) => {
    return (
      <div>
        <input type="checkbox" id={game.id} name={game.name} value={game.id}/>
        <label htmlFor={"gid"+game.id} style={{fontSize: 11}}>{game.name}</label>
      </div>
    )
  })
}

type option = {
  value: string;
  label: string;
}

type SearchStates = {
  city1: option[];
  selectedCity1: option;
  city2: option[];
  selectedCity2: option;
  isCollapseOpen: boolean;
}

const option1 = [
  { value: 'all', label: '전국' },
  { value: 'sut', label: '서울' },
  { value: 'bsg', label: '부산' },
  { value: 'dgg', label: '대구' },
  { value: 'icg', label: '인천' },
  { value: 'gjg', label: '광주' },
  { value: 'djg', label: '대전' },
  { value: 'usg', label: '울산' },
  { value: 'sjs', label: '세종' },
  { value: 'ggb', label: '경기북부' },
  { value: 'ggn', label: '경기남부' },
  { value: 'kwd', label: '강원' },
  { value: 'ccb', label: '충북' },
  { value: 'ccn', label: '충남' },
  { value: 'jlb', label: '전북' },
  { value: 'jln', label: '전남' },
  { value: 'gsb', label: '경북' },
  { value: 'gsn', label: '경남' },
  // { value: '제주', label: '제주' }
]

const option2 = [
  { value: '전체', label: '전체' }
]

class Search extends React.Component<{}, SearchStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      city1: option1,
      selectedCity1: option1[0],
      city2: option2,
      selectedCity2: option2[0],
      isCollapseOpen: false
    };
  }

  render() {
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
              <Select id="city1" name="city1" options={option1} data-width="100%" onChange={(selected => {
                if (selected) {
                  if (selected.value === 'all') {
                    this.setState({
                      selectedCity1: option1[0],
                      city2: option2,
                      selectedCity2: option2[0]
                    });
                  } else {
                    this.setState({
                      selectedCity1: selected,
                      city2: LocalAddr[selected.value].map(value => { return { value, label: value } })
                    });
                  }
                }
              })} />
            </div>
            <div className="col-4 px-1">
              <Select id="city2" name="city2" options={this.state.city2} data-width="100%" data-none-selected-text="전체" />
            </div>
            <div className="col-4 pl-1">
              <button type="button" className="btn btn-outline-dark">검색</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-2">
              <button className="btn btn-light w-100" type="button" onClick={() => { this.setState({ isCollapseOpen: !this.state.isCollapseOpen }) }}>
                상세 검색
              </button>
              <Collapse style={{ marginTop: '1vh' }} isOpened={this.state.isCollapseOpen} initialStyle={this.state.isCollapseOpen ? { height: 'auto' } : { height: 0 }}>
                <ul className="list-group list-group-flush">
                  <li id="game1" className="list-group-item py-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span className="badge bg-danger" style={{ color: 'white' }}>리듬</span>
                    {getGameListComponent(game1)}
                  </li>
                  <li id="game2" className="list-group-item py-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span className="badge bg-warning" style={{ color: 'white' }}>격투</span>
                    {getGameListComponent(game2)}
                  </li>
                  <li id="game3" className="list-group-item py-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span className="badge bg-success" style={{ color: 'white' }}>레이싱</span>
                    {getGameListComponent(game3)}
                  </li>
                  <li id="game4" className="list-group-item py-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span className="badge bg-info" style={{ color: 'white' }}>슈팅</span>
                    {getGameListComponent(game4)}
                  </li>
                  <li id="game5" className="list-group-item py-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span className="badge bg-primary" style={{ color: 'white' }}>액션</span>
                    {getGameListComponent(game5)}
                  </li>
                  <li id="game6" className="list-group-item py-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span className="badge bg-secondary" style={{ color: 'white' }}>퍼즐/캐쥬얼/스포츠</span>
                    {getGameListComponent(game6)}
                  </li>
                  <li id="game7" className="list-group-item py-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span className="badge bg-dark" style={{ color: 'white' }}>기타</span>
                    {getGameListComponent(game7)}
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>
          <div className="row mt-3 justify-content-center align-items-center" style={{ height: '30vh' }}>
            <div className="col text-center">
              <h2>No Searched</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;