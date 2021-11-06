function sendMessage() {
    var email1 = $("#cs-email1").val();
    var email2 = $("#cs-email2").val();
    var cstype = $("#cs-type option:selected").val();
    var content = $("#cs-content-text").val();

    var verifyEmail = function(e1, e2) {
        var email = e1+'@'+e2;
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(email.match(regExp) != null) return true;
        else return false;
    }

    if(email1 == '' | email1 == undefined | email2 == '' | email2 == undefined) {
        alert("이메일 주소를 입력해주세요.");
        return;
    }
    if(verifyEmail(email1, email2) == false) {
        alert("올바르지 않은 이메일 형식입니다.");
        return;
    }
    if(cstype == '' | cstype == undefined | cstype == '선택하세요') {
        alert("문의 종류를 선택하세요.");
        return;
    }
    if(content == '') {
        alert("문의 내용을 입력해주세요.");
        return;
    }

    var current = new Date();

    var embed = {
        fields: [
            {
                name: "이메일",
                value: email1+"@"+email2
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

    var data = {
        embeds: [embed]
    }

    $.ajax({
        url: "https://gorakulist.herokuapp.com/cs",
        data: JSON.stringify(data),
        method: "POST",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        crossOrigin: true
    })
        .done(function () {
            $("#cs-form")[0].reset();
            $('#cs-modal-success').modal('toggle');
        })
        .fail(function () {
            $('#cs-modal-fail').modal('toggle');
        });
}