import $ from "jquery";
import axios from "axios";
import './common'

import 'bootstrap-select/dist/js/bootstrap-select';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';

const constants = require('./constants.js');

$(function () {
  initIncorrectCS();
  $("#btn-submit").on("click", submitForm);
});

function initIncorrectCS() {
  if (hasUrlParam("incorrect")) {
    const name = getUrlParam("name");

    $("#cs-type").val("정보 추가/수정/삭제 요청").prop("selected", true);
    $("#cs-content-text").val(`오락실 이름 : ${name}\n내용 제보 : `);
  }
}

function hasUrlParam(param) {
  return new URLSearchParams(location.search).get(param) == "";
}

function getUrlParam(param) {
  return new URLSearchParams(location.search).get(param);
}

function submitForm() {
  const email1 = $("#cs-email1").val();
  const email2 = $("#cs-email2").val();
  const cstype = $("#cs-type option:selected").val();
  const content = $("#cs-content-text").val();

  if (!isValidateForm(email1, email2, cstype, content)) {
    return;
  }
  sendWebhookRequest(makeRequestData(email1, email2, cstype, content));
}

function validateEmail(e1, e2) {
  var email = e1 + '@' + e2;
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (email.match(regExp) != null) return true;
  else return false;
}

function isValidateForm(email1, email2, cstype, content) {
  if (email1 == '' || email1 == undefined || email2 == '' || email2 == undefined) {
    alert("이메일 주소를 입력해주세요.");
    return false;
  }
  if (validateEmail(email1, email2) == false) {
    alert("올바르지 않은 이메일 형식입니다.");
    return false;
  }
  if (cstype == '' || cstype == undefined || cstype == '선택하세요') {
    alert("문의 종류를 선택하세요.");
    return false;
  }
  if (content == '' || content == undefined) {
    alert("문의 내용을 입력해주세요.");
    return false;
  }
  return true;
}

function makeRequestData(email1, email2, cstype, content) {
  let current = new Date();

  let embed = {
    fields: [
      {
        name: "이메일",
        value: email1 + "@" + email2
      },
      {
        name: "문의 종류",
        value: cstype
      },
      {
        name: "문의 내용",
        value: content
      }
    ],
    footer: {
      text: current.toLocaleString()
    }
  }

  let data = {
    embeds: [embed]
  }
  return data;
}

function sendWebhookRequest(data) {
  axios.post(constants.BASE_URL + constants.CS, data)
    .then(() => {
      $("#cs-form")[0].reset();
      $('#cs-modal-success').modal('toggle');
    })
    .catch((error) => {
      console.log(error);
      $('#cs-modal-fail').modal('toggle');
    });
}
