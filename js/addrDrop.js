function secondAddr() {
    city1 = $("#city1").val();
    $("#city2").children("option").remove();

    kwd = ["강릉", "고성", "동해", "삼척", "속초",
           "양구", "양양", "영월", "원주", "인제",
           "정선", "철원", "춘천", "태백", "평창",
           "홍천", "화천"]
    ggn = ["과천", "광명", "광주", "군포", "김포",
           "부천", "성남", "수원", "시흥", "안산",
           "안성", "안양", "양평", "여주", "오산",
           "용인", "의왕", "이천", "평택", "하남",
           "화성"]
    ggb = ["가평", "고양", "구리", "남양주", "동두천",
           "양주", "연천", "의정부"]
    gsn = ["거창", "고성", "김해", "남해", "밀양",
           "사천", "산청", "양산", "의령", "진주",
           "창녕", "창원", "통영", "하동", "함안",
           "함양", "합천"]
    gsb = ["경산", "경주", "고령", "구미", "군위",
           "김천", "문경", "봉화", "상주", "성주",
           "안동", "영덕", "영양", "영주", "영천",
           "예천", "울릉", "울진", "의성", "청도",
           "청송", "칠곡", "포항"]
    gjg = ["광산", "남구", "동구", "북구", "서구"]
    dgg = ["남구", "달서", "달성", "동구", "북구",
           "서구", "수성", "중구"]
    djg = ["대덕", "동구", "서구", "유성", "중구"]
    bsg = ["강서", "금정", "기장", "남구", "동구",
           "동래", "부산진", "북구", "사상", "사하",
           "서구", "수영", "연제", "영도", "중구",
           "해운대"]
    sut = ["강남", "강동", "강북", "강서", "관악",
           "광진", "구로", "금천", "노원", "도봉",
           "동대문", "동작", "마포", "서대문", "서초",
           "성동", "성북", "송파", "양천", "영등포",
           "용산", "은평", "종로", "중구", "중랑"]
    usg = ["남구", "동구", "울주", "중구"]
    icg = ["강화", "계양", "남동", "동구", "미추홀",
           "부평", "서구", "연수", "옹진", "중구"]
    jln = ["강진", "고흥", "곡성", "광양", "구례",
           "나주", "담양", "목포", "무안", "보성",
           "순천", "신안", "여수", "영광", "영암",
           "완도", "장성", "장흥", "진도", "함평",
           "해남", "화순"]
    jlb = ["고창", "군산", "김제", "남원", "무주",
           "부안", "순창", "완주", "익산", "임실",
           "장수", "전주", "정읍", "진안"]
    ccn = ["계룡", "공주", "금산", "논산", "당진",
           "보령", "부여", "서산", "서천", "아산",
           "예산", "천안", "청양", "태안", "홍성"]
    ccb = ["괴산", "단양", "보은", "영동", "옥천",
           "음성", "제천", "증평", "진천", "청주",
           "충주"]
    sjs = ["조치원읍", "행정중심복합도시"]

    $("#city2").append("<option value='전체'>전체</option>")
    if(city1 == "강원") {
        $.each(kwd, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "경기남부") {
        $.each(ggn, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "경기북부") {
        $.each(ggb, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "경남") {
        $.each(gsn, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "경북") {
        $.each(gsb, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "광주") {
        $.each(gjg, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "대구") {
        $.each(dgg, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "대전") {
        $.each(djg, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "부산") {
        $.each(bsg, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "서울") {
        $.each(sut, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "울산") {
        $.each(usg, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "인천") {
        $.each(icg, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "전남") {
        $.each(jln, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "전북") {
        $.each(jlb, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "충남") {
        $.each(ccn, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "충북") {
        $.each(ccb, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    if(city1 == "세종") {
        $.each(sjs, function(idx, item) {
            $("#city2").append("<option value='"+item+"'>"+item+"</option>")
        });
    }
    $("#city2").selectpicker("refresh");
}