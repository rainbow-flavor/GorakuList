const myGroup = $('#myGroup');
myGroup.on('show.bs.collapse','.collapse', function() {
    myGroup.find('.collapse.in').collapse('hide');
});

$(function addEventListener() {
    $("#btn-search").on("click", submitForm);
    $("#city1").on("change", onFirstAddressChange);
    $(".store-card-info").on("click", onCardClickHandler);
    $(".store-card-machine").on("click", onCardMachineClickHandler);
});

function isValid(selectedGame){
    if (selectedGame.length > 5) {
        alert("5개 이상 선택하실 수 없습니다!");
        return false;
    }
    return true;
}

function submitForm(){
    const city1 = $("#city1").val();
    const city2 = $("#city2").val();
    const condition = $("input[name=condition]:checked").val();
    const gameCheckbox = [];

    $("input[name=gameCheckbox]:checked").each(function(){
        gameCheckbox.push(this.value);
    });

    if(!isValid(gameCheckbox)){
        return;
    }

    const param = new URLSearchParams({ city1, city2, condition, gameCheckbox }).toString();
    location.href = `/store?${param}`;
}

function onCardClickHandler(e){
    e.stopPropagation();
    e.preventDefault();
    location.href="/store/detail?storeId="+e.currentTarget.id.split('-')[1];
}

function onCardMachineClickHandler(e) {
    $("#machinecount-"+e.currentTarget.id.split('-')[1]).toggle();
    $(".hidden-machine-"+e.currentTarget.id.split('-')[1]).toggle();
}

function onFirstAddressChange() {
    const city1 = $("#city1").val();
    $("#city2").children("option").remove();

    $("#city2").append("<option value=''>전체</option>")
    if (city1 !== "" && city1 !== "기타") {
        $.each(city2[city1], function (idx, item) {
            $("#city2").append("<option value='" + item + "'>" + item + "</option>")
        });
    }
    $("#city2").selectpicker('refresh');
}

window.addEventListener('DOMContentLoaded', initCity2);

function initCity2(){
    const city1 = $("#city1").val();
    console.log(city1);
    $("#city2 option").not("[value='']").remove();
    $.each(city2[city1], function (idx, item) {
        console.log(item);
        $("#city2").append("<option value='" + item + "'>" + item + "</option>")
    });
    const city2Last = $("#city2-last").val();
    console.log(city2Last);
    $("#city2").selectpicker('val', city2Last);
}

const city2 = {
    강원: ["강릉시", "고성군", "동해시", "삼척시", "속초시",
        "양구군", "양양군", "영월군", "원주시", "인제군",
        "정선군", "철원군", "춘천시", "태백시", "평창군",
        "홍천군", "화천군", "횡성군"],
    경기남부: ["과천시", "광명시", "광주시", "군포시", "김포시",
        "부천시", "성남시", "수원시", "시흥시", "안산시",
        "안성시", "안양시", "양평군", "여주시", "오산시",
        "용인시", "의왕시", "이천시", "평택시", "하남시",
        "화성시"],
    경기북부: ["가평군", "고양시", "구리시", "남양주시", "동두천시",
        "양주시", "연천군", "의정부시", "파주시", "포천시"],
    경남: ["거제시", "거창군", "고성군", "김해시", "남해군",
        "밀양시", "사천시", "산청군", "양산시", "의령군",
        "진주시", "창녕군", "창원시", "통영시", "하동군",
        "함안군", "함양군", "합천군"],
    경북: ["경산시", "경주시", "고령군", "구미사", "군위군",
        "김천시", "문경시", "봉화군", "상주시", "성주군",
        "안동시", "영덕군", "영양군", "영주시", "영천",
        "예천군", "울릉군", "울진군", "의성군", "청도군",
        "청송군", "칠곡군", "포항시"],
    광주: ["광산구", "남구", "동구", "북구", "서구"],
    대구: ["남구", "달서구", "달성군", "동구", "북구",
        "서구", "수성구", "중구"],
    대전: ["대덕구", "동구", "서구", "유성구", "중구"],
    부산: ["강서구", "금정구", "기장군", "남구", "동구",
        "동래구", "부산진구", "북구", "사상구", "사하구",
        "서구", "수영구", "연제구", "영도구", "중구",
        "해운대구"],
    서울: ["강남구", "강동구", "강북구", "강서구", "관악구",
        "광진구", "구로구", "금천구", "노원구", "도봉구",
        "동대문구", "동작구", "마포구", "서대문구", "서초구",
        "성동구", "성북구", "송파구", "양천구", "영등포구",
        "용산구", "은평구", "종로구", "중구", "중랑구"],
    울산: ["남구", "동구", "북구", "울주군", "중구"],
    인천: ["강화군", "계양구", "남동구", "동구", "미추홀구",
        "부평구", "서구", "연수구", "옹진군", "중구"],
    전남: ["강진군", "고흥군", "곡성군", "광양시", "구례군",
        "나주시", "담양군", "목포시", "무안군", "보성군",
        "순천시", "신안군", "여수시", "영광군", "영암군",
        "완도군", "장성군", "장흥군", "진도군", "함평군",
        "해남군", "화순군"],
    전북: ["고창군", "군산시", "김제시", "남원시", "무주군",
        "부안군", "순창군", "완주군", "익산시", "임실군",
        "장수군", "전주시", "정읍시", "진안군"],
    충남: ["계룡시", "공주시", "금산군", "논산시", "당진시",
        "보령시", "부여군", "서산시", "서천군", "아산시",
        "예산군", "천안시", "청양군", "태안군", "홍성군"],
    충북: ["괴산군", "단양군", "보은군", "영동군", "옥천군",
        "음성군", "제천시", "증평군", "진천군", "청주시",
        "충주시"],
    세종: ["조치원읍", "행정중심복합도시"],
    제주: ["제주시", "서귀포시"]
}