import $ from "jquery";
import axios from "axios";

import * as constants from './constants'

$(function () {
  constants.gameListAll.forEach((gameListCategorized, index) => {
    gameListCategorized.forEach(item => {
      const inputbox = " <div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='checkbox' id='gid" + item.id + "' name='" + item.name + "' value='" + item.id + "'>";
      const label = " <label class='form-check-label' for='gid" + item.id + "'>" + item.name + "</label></div>";
      $('#game' + String(index + 1)).append(inputbox + label);
    });
  });
});

$(function addEventListener() {
  $("#btn-search").on("click", searchPage);
  $("#city1").on("change", onFirstAddressChange);
});

function onFirstAddressChange() {
  const city1 = $("#city1").val();
  $("#city2").children("option").remove();

  $("#city2").append("<option value=''>전체</option>")
  if (city1 !== "" && city1 !== "기타") {
    $.each(constants.city2List[city1], function (idx, item) {
      $("#city2").append("<option value='" + item + "'>" + item + "</option>")
    });
  }
  $("#city2").selectpicker('refresh');
}

function searchPage() {
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

  constants.gameListAll.forEach(gameListCategorized => {
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

  sendRequest(RequestData);
}

function sendRequest(requestData) {
  axios.post(constants.BASE_URL + constants.SEARCH, requestData)
    .then(response => {
      console.log(response.data);
      if (response.data.length == 0) return;
      createStoreCard(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function createStoreCard(responseData) {
  let storesHtml = '';
  $("#store-card-list").empty();
  responseData.forEach((store) => {
    $.get("../store-card.html", function (data) {
      if (store.isop !== null) data = data.replace('{store-opened-status}', constants.openedElementList[store.isop ? 0 : 1]);
      else data = data.replace('{store-opened-status}', constants.openedElementList[3]);

      if (store.knsta !== null) {
        let asktn_img = '';
        [...store.knsta].forEach(c => { asktn_img = asktn_img.concat(`<img src="./src/resources/${c}.png" width="20" /> `); });
        data = data.replace('{store-network-status}', asktn_img);
      }
      else data = data.replace('{store-network-status}', '');

      if (store.name !== null) data = data.replace('{store-name-text}', store.name);
      else data = data.replace('{store-name-text}', '정보 없음');

      if (store.address !== null) data = data.replace('{store-card-address-text}', store.address);
      else data = data.replace('{store-card-address-text}', '정보 없음');

      if (store.uptime !== null) data = data.replace('{store-card-uptime-text}', store.uptime);
      else data = data.replace('{store-card-uptime-text}', '정보 없음');

      storesHtml = storesHtml.concat(data);
      $("#store-card-list").append(data);
    });
  })
}

/*function getGameNameById(id) {
  gameListAll.forEach(gameListCategorized => {
    gameListCategorized.forEach(game => {
      if (game.id == id) return game.name;
    });
  })

  return '';
}

function getGameName(ids) {
  const gameNames = ids.map(id => { return getGameNameById(id) });
  return gameNames.join(', ');
}*/