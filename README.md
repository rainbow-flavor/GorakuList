# GorakuList :joystick:

아케이드 게임 플레이어가 원하는 오락실을 쉽게 찾기 위한 오락실 검색 웹앱

## How to install package
```
//node.js 설치 후 프로젝트 루트 경로에서
npm install
```

## How to bundling javascript source
```
//프로젝트 루트 경로에서
npm run build 
or 
npm run build-watch
```
build-watch 의 경우 javascript 소스에 변경사항이 있을 경우 실시간으로 핫로드
## 프로젝트 구성

### 기체 JSON 구조

```json
{
  "type": "기체 대분류 id (타입)",
  "id": "기체별 global id",
  "koName": "기체 이름",
  "enName": "기체 영문이름",
  "category": "기체 분류",
  "company": "제조사",
  "desc": "기체 추가 설명"
}
```
#### 기체 대분류 id 범위

<details>
<summary>보기</summary>
<div class="heatMap" markdown="1"> 

|코드| 100~299 | 300~399| 400~499| 500~599 | 600~699 | 700~799 | 900~999 |
|:---:|:---: |:---: |:---:|:---:|:---:|:---:|:---:|
|분류| 리듬 | 격투 | 레이싱 | 슈팅 | 액션 | 퍼즐/캐주얼/스포츠 | 기타 |
|기체| WACCA | 더 킹 오브 파이터즈 '97 | 오버테이크 DX | BB탄 사격 | 버블 메모리즈 | 갈스패닉 SU | VR 존 |
|| WACCA 릴리 | 더 킹 오브 파이터즈 '98 | 이니셜D 아케이드 스테이지 Zero Ver.2 | 다크 이스케이프 4D | 버블보블 | 아타리 테트리스 | 부스형 노래방 |
|| WACCA 리버스 | 철권 6 블러드라인 리벨리온 | | 더 하우스 오브 더 데드 4 | 스노우 브라더스 2 | 더 비시바시 | 뽑기 |
|| 비트매니아 IIDX 28 BISTROVER | 철권 7 페이티드 레트리뷰션 | | 데드스톰 파이레츠 | | 딥 씨 파티 (낚시) | 스티커 사진기 |
|| 댄스러시 스타덤 | | | 타임 크라이시스 : 레이징 스톰 | | 비시바시 채널 | |
|| DanceDanceRevolution A | | | 렛츠 고 정글 | | 픽셀크래프트 | |
|| DanceDanceRevolution A20 | | | 로스트 랜드 어드벤처 | | 해머 2 | |
|| DanceDanceRevolution A20 PLUS | | | 스트라이커즈 1945 II | | 히든캐치 5 | |
|| 이지투 아케이드 : 파이널 EX | | | 워터슛 | | 비트 앤 덩크 | |
|| GITADORA NEX + AGE | | | 좀비 워즈 | | 더 악력 | |
|| GITADORA HIGH-VOLTAGE 기타프릭스 | | | 판타지 반반 (코르크 사격) | | 패스트트랙 EVO | |
|| GITADORA HIGH-VOLTAGE 드럼매니아 | | | 트랜스포머 휴먼 얼라이언스 | | 드래곤 펀치 | |
|| maimai DX SPLASH | | | | | | |
|| 비트세이버 | | | | | | |
|| 비트온 XX | | | | | | |
|| 사운드 볼텍스 익시드 기어 | | | | | | |
|| 유비트 페스토 | | | | | | |
|| 태고의 달인 니지이로 | | | | | | |
|| 펌프 잇 업 PRIME 2 | | | | | | |
|| 펌프 잇 업 XX | | | | | |

</div></details>

### Store JSON 구조

```json
{
  "city1": "도시1 (서울, 경기 등)",
  "city2": "도시2 (양천구, 과천시 등)",
  "name": "가게 명칭",
  "address": "전체 주소",
  "uptime": "영업시간",
  "isop": "영업여부",
  "machines": "기체id리스트",
  "contact": "전화번호",
  "twitter": "트위터",
  "website": "사이트",
  "knsta": "이어뮤카드"
}
```

### Store JSON 내부, machines JSON 구조

```json

[
  {
    "type": "기체 대분류",
    "typeId": "기체 고유식별 번호",
    "machineName": "기체 명칭",
    "count": "기체 대수",
    "desc": "기체 설명"
  },
  {
    ...
  }
]

```

## 개발 환경

### OS

- Windows 10 Pro (v2004)
- macOS (Big Sur 11.5.1)

- Windows 10 Home
- macOS (Catalina 10.15.7)

### EXT
- npm (7.23.0)
- webpack (5.52.1)
- bootstrap (4.6.0)
- axios (0.21.4)
- bootstrap (4.6.0)
- bootstrap-select (1.13.18)
- font-awesome (4.7.0)
- jquery (3.6.0)

### IDE

- visual studio code (with extension : prettier)

- IntelliJ
