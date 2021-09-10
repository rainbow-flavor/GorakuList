var gameListAll = [
    // 리듬
    [{ 'id': '100', 'name': 'WACCA' },
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
    { 'id': '112', 'name': '펌프 잇 업' }],

    // 격투
    [{ 'id': '300', 'name': '킹 오브 파이터즈' },
    { 'id': '301', 'name': '철권' }],

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

function getGameNameById(id) {
    var retValue = undefined;
    gameListAll.forEach(gameListCategorized => {
        gameListCategorized.forEach(game => {
            if (game.id == id) {
                retValue = game.name;
            }
        });
    })

    if (retValue) return retValue;
    else return '';
}

function getGameName(ids) {
    if (ids == '-1') {
        return '';
    }

    const game_name = ids.split(',');
    var ret_str = '';
    for (var i = 0; i < game_name.length; i++) {
        console.log(game_name[i]);
        ret_str += getGameNameById(game_name[i]) + ',';
    }
    return ret_str;
}

function addGames() {
    gameListAll.forEach((gameListCategorized, index) => {
        gameListCategorized.forEach(item => {
            var inputbox = " <input type='checkbox' id='gid" + item.id + "' name='" + item.name + "' value='" + item.id + "'>";
            var label = " <label for='gid" + item.id + "'>" + item.name + "</label>";
            $("#game" + String(index + 1)).append(inputbox + label);
        });
    });
}
