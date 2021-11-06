export const BASE_URL = "https://gorakulist.herokuapp.com";
// export const BASE_URL = "http://localhost:8080";
export const API = "/api"
export const SEARCH = "/search";
export const CS = "/cs";

export const city2List = {
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

export const gameListAll = [
    // 리듬
    [{ 'id': '100', 'name': '왓카' },
        { 'id': '115', 'name': '츄니즘' },
        { 'id': '101', 'name': '투덱' },
        { 'id': '102', 'name': '댄스러시' },
        { 'id': '103', 'name': 'DDR' },
        { 'id': '104', 'name': '이지투' },
        { 'id': '105', 'name': '기타도라' },
        { 'id': '106', 'name': '마이마이' },
        { 'id': '107', 'name': '비트세이버' },
        { 'id': '109', 'name': '사볼' },
        { 'id': '110', 'name': '유비트' },
        { 'id': '111', 'name': '태고의 달인' },
        { 'id': '112', 'name': '펌프' },
        { 'id': '127', 'name': '주니어 펌프' },
        { 'id': '113', 'name': '디맥' },
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
        { 'id': '128', 'name': '비트크래프트' },
        { 'id': '129', 'name': '프리파라' },
        { 'id': '130', 'name': '드럼마스터' },
    ],

    // 격투
    [{ 'id': '300', 'name': '킹오파' },
        { 'id': '301', 'name': '철권' },
        { 'id': '302', 'name': '스트리트 파이터' },
        { 'id': '303', 'name': '블러디 로어' },
        { 'id': '304', 'name': '월광보합' },
        { 'id': '305', 'name': '삼국전기' },
        { 'id': '306', 'name': '레슬페스트' },
        { 'id': '307', 'name': '패닉 뮤지엄' },],

    // 레이싱
    [{ 'id': '400', 'name': '오버테이크' },
        { 'id': '401', 'name': '이니셜D' },
        { 'id': '402', 'name': '슈퍼바이크' },
        { 'id': '403', 'name': '마리오카트' },
        { 'id': '404', 'name': '모토 GP' },
        { 'id': '405', 'name': '슈퍼 알파인 레이서' },
        { 'id': '406', 'name': '아웃런' },
        { 'id': '407', 'name': '할리 데이비슨' },
        { 'id': '408', 'name': '험머' },
        { 'id': '409', 'name': '스피드 라이더' },
        { 'id': '410', 'name': '데이토나' },
        { 'id': '411', 'name': '완간 미드나이트' },
        { 'id': '412', 'name': '크루즌' },
        { 'id': '413', 'name': '배틀기어' },
        { 'id': '414', 'name': '소닉' },
        { 'id': '415', 'name': '데드 히트 라이더' },
        { 'id': '416', 'name': '듀오 드라이브' },
        { 'id': '417', 'name': '콜린 맥레이' },
        { 'id': '418', 'name': '스노크로스' },
        { 'id': '419', 'name': '스타워즈' },
        { 'id': '420', 'name': '세가 랠리' },],

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
        { 'id': '511', 'name': '트랜스포머' },
        { 'id': '512', 'name': '몬스터 아이' },
        { 'id': '513', 'name': '나이트 헌터' },
        { 'id': '514', 'name': '타겟 브라보' },
        { 'id': '515', 'name': '19XX' },
        { 'id': '516', 'name': '아이스맨' },
        { 'id': '517', 'name': '디노 슈팅' },
        { 'id': '518', 'name': '물총' },
        { 'id': '519', 'name': '스냅 좀비' },
        { 'id': '520', 'name': '타겟 헌터' },
        { 'id': '521', 'name': '슈터짱' },
        { 'id': '523', 'name': '건버드' },
        { 'id': '524', 'name': '라이덴' },
        { 'id': '525', 'name': '전국 블레이드' },
        { 'id': '526', 'name': '미션 크래프트' },
        { 'id': '527', 'name': '포인트 블랭크' },
        { 'id': '528', 'name': '사격' },
        { 'id': '529', 'name': '크레이지 워터' },
        { 'id': '530', 'name': '건블레이드' },
        { 'id': '531', 'name': '타이트 로프' },
        { 'id': '532', 'name': '에스프레이드' },
        { 'id': '533', 'name': '갤러그' },
        { 'id': '534', 'name': '쥬라기 공원' },
        { 'id': '535', 'name': '터미네이터' },
        { 'id': '536', 'name': '좀비 좀비스' },
        { 'id': '537', 'name': '다리우스 버스트' },
        { 'id': '538', 'name': '3D 디펜딩 롤리팝' },],

    // 액션
    [{ 'id': '700', 'name': '버블 메모리즈' },
        { 'id': '701', 'name': '버블보블' },
        { 'id': '702', 'name': '스노우 브라더스' },
        { 'id': '703', 'name': '메탈슬러그' },
        { 'id': '704', 'name': '테크모 월드컵' },
        { 'id': '705', 'name': '세계에서 가장 큰 팩맨' },
        { 'id': '706', 'name': '파이널 파이트' },
        { 'id': '707', 'name': '네오 봄버맨' },
        { 'id': '708', 'name': '던전 오브 드래곤' },
        { 'id': '709', 'name': '던전 앤 드래곤' },
        { 'id': '710', 'name': '천지를 먹다' },
        { 'id': '711', 'name': '펭귄 브라더스' },
        { 'id': '712', 'name': '닌자 베이스볼 배트맨' },],

    // 퍼즐/캐쥬얼/스포츠
    [{ 'id': '800', 'name': '갈스패닉' },
        { 'id': '801', 'name': '아타리 테트리스' },
        { 'id': '802', 'name': '비시바시' },
        { 'id': '803', 'name': '낚시' },
        { 'id': '804', 'name': '픽셀크래프트' },
        { 'id': '805', 'name': '해머' },
        { 'id': '806', 'name': '히든 캐치' },
        { 'id': '807', 'name': '농구' },
        { 'id': '808', 'name': '악력기' },
        { 'id': '810', 'name': '펀치 기계' },
        { 'id': '811', 'name': '천방지축' },
        { 'id': '812', 'name': '컴온 베이비' },
        { 'id': '813', 'name': '다트' },
        { 'id': '814', 'name': '에어하키' },],

    // 기타
    [{ 'id': '900', 'name': 'VR존' },
        { 'id': '901', 'name': '부스형 노래방' },
        { 'id': '902', 'name': '뽑기' },
        { 'id': '903', 'name': '스티커 사진기' }]
]

export const openedElementList = [
    '<span class="badge bg-success" style="color:white">영업 중</span>',
    '<span class="badge bg-danger" style="color:white">폐업</span>',
    '<span class="badge bg-warning" style="color:white">영업 종료</span>',
    '<span class="badge bg-secondary" style="color:white">정보 없음</span>'
]
