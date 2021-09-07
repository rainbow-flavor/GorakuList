import React from 'react';
import Select from 'react-select';

import './cs.css';

const options = [
  { value: '선택하세요', label: '선택하세요' },
  { value: '정보 추가/수정/삭제 요청', label: '정보 추가/수정/삭제 요청' },
  { value: '서비스 관련', label: '서비스 관련' },
  { value: '제휴 문의', label: '제휴 문의' },
  { value: '기타', label: '기타' }
]

function Cs() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <h3 className="display-5" id="cs-title">문의</h3>
          <p className="lead" id="cs-subtitle">사이트 관련 각종 문의를 넣어주세요</p>
        </div>
      </div>
      <form name="cs-form" id="cs-form">
        <div className="input-group mb-3">
          <span className="input-group-text">이메일</span>
          <input type="text" id="cs-email1" className="form-control" placeholder="메일 ID" aria-label="Username" />
          <span className="input-group-text">@</span>
          <input type="text" id="cs-email2" className="form-control" placeholder="메일 서버" aria-label="Server" />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">문의 종류</label>
          <Select className="form-select" id="cs-type" options={options}/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">문의 내용</span>
          <textarea className="form-control" aria-label="With textarea" rows={5} id="cs-content-text"></textarea>
        </div>
        <div className="input-group mb-3">
          <button type="button" className="btn btn-primary">제출</button>
        </div>
      </form>
    </div>
  );
};

export default Cs;