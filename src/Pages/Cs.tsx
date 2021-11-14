import React from "react";
import { Link } from "react-router-dom";

import { BASE_URL, CS, CSTypes } from './constants';

interface CsState {
  emailSubject: string;
  emailUrl: string;
}

interface Embed {
  fields: { name: string, value: string }[],
  footer: { text: string }
}

export default class Cs extends React.Component<{}, CsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      emailSubject: "",
      emailUrl: ""
    };
  }

  private validateEmail = (email: string) => {
    const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div id="content">
        <div>
          <div>
            <div>
              <h3 id="cs-title">문의</h3>
              <p id="cs-subtitle">사이트 관련 각종 문의를 넣어주세요</p>
            </div>
          </div>
          <form id="cs-form">
            <div>
              <span>이메일</span>
              <input
                id="cs-email1"
                type="text"
                placeholder="메일 ID"
                aria-label="Username"
                onChange={e => { this.setState({ emailSubject: e.target.value, emailUrl: this.state.emailUrl }) }} />
              <span>@</span>
              <input
                id="cs-email2"
                type="text"
                placeholder="메일 서버"
                aria-label="Server"
                onChange={e => { this.setState({ emailUrl: e.target.value, emailSubject: this.state.emailSubject }) }}/>
            </div>
            <div>
              <div>
                <label htmlFor="cs-type">문의 종류</label>
              </div>
              <select id="cs-type">
                <option value="선택하세요">선택하세요</option>
                {CSTypes.map((csType) => {
                  return <option key={csType} value={csType}>{csType}</option>
                })}
              </select>
            </div>
            <div>
              <span>문의 내용</span>
              <textarea id="cs-content-text" aria-label="With textarea"></textarea>
            </div>
          </form>
          <div>
            아래의 제출 버튼을 누름으로서 GorakuList의 <Link to="/legal/toc.html">이용약관</Link>과 <Link to="/legal/privacy.html">개인정보처리방침</Link>에
            동의한
            것으로 간주합니다.
          </div>
          <div>
            <button onClick={this.onSubmitButtonClick.bind(this)} type="button">제출</button>
          </div>
        </div>
      </div>
    );
  }

  onSubmitButtonClick() {
    const email = this.state.emailUrl + "@" + this.state.emailSubject;

    const csTypeElement = document.getElementById("cs-type") as HTMLSelectElement;
    const csType = csTypeElement.options[csTypeElement.selectedIndex].value;

    const csContentElement = document.getElementById("cs-content-text") as HTMLTextAreaElement;
    const csContent = csContentElement.value;

    if (this.isValidateForm(email, csType, csContent)) {
      const requestData = this.getRequestData(email, csType, csContent);
      this.sendWebhookRequest(requestData);
    }
  }

  isValidateForm(email: string, csType: string, csContent: string) {
    if (!this.validateEmail(email)) {
      alert("올바른 이메일을 입력해주세요");
      return false;
    }

    if (csType === "선택하세요" || !csType) {
      alert("문의 종류를 선택해주세요");
      return false;
    }

    if (!csContent || csContent.length < 10) {
      alert("문의 내용을 적어도 10자 이상 입력해주세요");
      return false;
    }

    return true;
  }

  getRequestData(email: string, csType: string, csContent: string) {
    const currentDate = new Date();
    const embed: Embed = {
      fields: [
        { name: "이메일", value: email },
        { name: "문의 종류", value: csType },
        { name: "문의 내용", value: csContent },
      ],
      footer: { text: currentDate.toLocaleString() }
    }

    return { data: [embed] };
  }

  sendWebhookRequest(data: { data: Embed[] }) {
    fetch(BASE_URL + CS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}