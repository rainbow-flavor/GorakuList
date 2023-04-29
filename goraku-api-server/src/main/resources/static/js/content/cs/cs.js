$(function () {
    initIncorrectCS();
    $("#btn-submit").on("click", submitForm);
    $("input[type=file]").bind("change", onFileClickHandler)

});

function onFileClickHandler(e) {
    if (this.files && this.files[0]) {
        let maxSize = 10 * 1024 * 1024;
        let fileSize = this.files[0].size;

        if (fileSize > maxSize) {
            alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
            $(this).val('');
            return false;
        }
    }
}

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
    let email = e1 + '@' + e2;
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.match(regExp) != null) return true; else return false;
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
    const formData = new FormData();
    formData.append("email", email1 + "@" + email2);
    formData.append("cstype", cstype);
    formData.append("content", content);
    formData.append("footer", new Date().toLocaleString());

    const file = $("#input-image-file")[0].files[0];

    if (file != null) {
        formData.append("image", file);
    }
    return formData;
}

function sendWebhookRequest(formData) {
    axios.post("/cs", formData)
        .then(() => {
            $("#cs-form")[0].reset();
            $('#cs-modal-success').modal('toggle');
        })
        .catch((error) => {
            console.log(error);
            $('#cs-modal-fail').modal('toggle');
        });
}