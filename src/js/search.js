import axios from "axios";
import $ from "jquery";

import './constants'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-select/dist/js/bootstrap-select';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';

import 'font-awesome/css/font-awesome.min.css';

const city2List = {
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

const gameListAll = [
    // 리듬
    [{ 'id': '100', 'name': 'WACCA' },
    { 'id': '115', 'name': '츄니즘' },
    { 'id': '101', 'name': 'beatmania' },
    { 'id': '102', 'name': 'DANCERUSH' },
    { 'id': '103', 'name': 'DDR' },
    { 'id': '104', 'name': 'EZ2AC' },
    { 'id': '105', 'name': 'GITADORA' },
    { 'id': '106', 'name': 'maimai' },
    { 'id': '107', 'name': '비트세이버' },
    { 'id': '109', 'name': '사운드 볼텍스' },
    { 'id': '110', 'name': 'jubeat' },
    { 'id': '111', 'name': '태고의 달인' },
    { 'id': '112', 'name': '펌프 잇 업' },
    { 'id': '127', 'name': '주니어 펌프' },
    { 'id': '113', 'name': 'DJMAX' },
    { 'id': '114', 'name': '그루브 코스터' },
    { 'id': '116', 'name': '노스텔지어' },
    { 'id': '117', 'name': '리플렉 비트' },
    { 'id': '118', 'name': '팝픈뮤직' },
    { 'id': '119', 'name': 'Project DIVA' },
    { 'id': '108', 'name': '비트온' },
    { 'id': '120', 'name': 'DJ Beat' },
    { 'id': '121', 'name': '네오드럼X' },
    { 'id': '122', 'name': '댄스 에볼루션' },
    { 'id': '123', 'name': '뮤제카' },
    { 'id': '124', 'name': '크로스비츠' },
    { 'id': '125', 'name': '프리채널' },
    { 'id': '126', 'name': '히트 더 비트' },
    { 'id': '128', 'name': '비트크래프트' }
    ],

    // 격투
    [{ 'id': '300', 'name': '킹 오브 파이터즈' },
    { 'id': '301', 'name': '철권' },
    { 'id': '302', 'name': '스트리트 파이터' }],

    // 레이싱
    [{ 'id': '400', 'name': '오버테이크' },
    { 'id': '401', 'name': '이니셜D' }],

    // 슈팅
    [{ 'id': '500', 'name': 'BB탄 사격' },
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
    { 'id': '511', 'name': '트랜스포머' }],

    // 액션
    [{ 'id': '600', 'name': '버블 메모리즈' },
    { 'id': '601', 'name': '버블보블' },
    { 'id': '602', 'name': '스노우 브라더스' }],

    // 퍼즐/캐쥬얼/스포츠
    [{ 'id': '700', 'name': '갈스패닉' },
    { 'id': '701', 'name': '아타리 테트리스' },
    { 'id': '702', 'name': '비시바시' },
    { 'id': '703', 'name': '딥 씨 파티' },
    { 'id': '704', 'name': '픽셀크래프트' },
    { 'id': '705', 'name': '해머' },
    { 'id': '706', 'name': '히든 캐치' },
    { 'id': '707', 'name': '비트 앤 덩크' },
    { 'id': '708', 'name': '더 악력' },
    { 'id': '709', 'name': '패스트트랙' },
    { 'id': '710', 'name': '드래곤 펀치' }],

    // 기타
    [{ 'id': '900', 'name': 'VR존' },
    { 'id': '901', 'name': '부스형 노래방' },
    { 'id': '902', 'name': '뽑기' },
    { 'id': '903', 'name': '스티커 사진기' }]
]

export function onFirstAddressChange() {
    const city1 = $("#city1").val();
    $("#city2").children("option").remove();

    $("#city2").append("<option value=''>전체</option>")
    if (city1 !== "" && city1 !== "기타") {
        $.each(city2List[city1], function (idx, item) {
            $("#city2").append("<option value='" + item + "'>" + item + "</option>")
        });
    }

    $("#city2").selectpicker('refresh');
}

export function getGameNameById(id) {
    gameListAll.forEach(gameListCategorized => {
        gameListCategorized.forEach(game => {
            if (game.id == id) return game.name;
        });
    })
    return '';
}

export function getGameName(ids) {
    const gameNames = ids.map(id => { return getGameNameById(id) });
    return gameNames.join(', ');
}

(function addGames() {
    gameListAll.forEach((gameListCategorized, index) => {
        gameListCategorized.forEach(item => {
            const inputbox = " <div class='form-check form-check-inline'><input class='form-check-input' type='checkbox' id='gid" + item.id + "' name='" + item.name + "' value='" + item.id + "'>";
            const label = " <label class='form-check-label' for='gid" + item.id + "'>" + item.name + "</label></div>";
            $('#game' + String(index + 1)).append(inputbox + label);
        });
    });
})();

export function searchPage() {
    const city1 = $("#city1").val();
    const city2 = $("#city2").val();

    if (city1 === '' || !city1 || city1 === "전국") {
        alert("시/도를 선택하세요.");
        return;
    }

    if (city2 === '' || !city2 || city2 === "전체") {
        alert("시/군/구를 선택하세요.");
        return;
    }

    const selectedGameIdList = [];

    gameListAll.forEach(gameListCategorized => {
        gameListCategorized.forEach(game => {
            if ($("#gid" + game.id).is(":checked")) {
                selectedGameIdList.push(game.id);
            }
        })
    });

    if (selectedGameIdList.length > 5) {
        alert("5개 이상 선택하실 수 없습니다!");
        return;
    }

    const RequestData = {
        city1: city1,
        city2: city2,
        machineTypes: selectedGameIdList
    }

    requestSearch(RequestData);
}

export function requestSearch(requestData) {
    axios.post(`${API_URL}/search`, JSON.stringify(requestData), {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Data-Type': 'json'
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}