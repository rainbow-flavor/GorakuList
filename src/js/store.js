import './common'
import $ from "jquery";

$(function () {
  $('[data-toggle="tooltip"]').tooltip('enable');
  $('#btn-map').on('click', onCollapseClick);
});

var lat = 37.5171254;
var lng = 126.9037993;
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(lat, lng);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

function onCollapseClick() {
  setTimeout(() => {
    map.relayout();
    map.setCenter(new kakao.maps.LatLng(lat, lng));
  }, 500);
}
