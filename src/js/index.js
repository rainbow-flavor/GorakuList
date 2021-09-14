// import axios from "axios";
// import $ from "jquery";

//import './constants';

import 'bootstrap/dist/js/bootstrap.bundle';
//import 'bootstrap-select/dist/js/bootstrap-select';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';

import 'font-awesome/css/font-awesome.min.css';

function onFirstAddressChange(city1Element, city2Element) {
  const city1 = $("#city1").val();
  $("#city2").children("option").remove();

  $("#city2").append("<option value=''>전체</option>")
  if (city1 !== "" && city1 !== "기타") {
    $.each(city2list[city1], function (idx, item) {
      $("#city2").append("<option value='" + item + "'>" + item + "</option>")
    });
  }

  $("#city2").selectpicker('refresh');
}

function SearchPage() {
  function getGameNameById(id) {
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
  }

  function addGames(gameElement) {
    gameListAll.forEach((gameListCategorized, index) => {
      gameListCategorized.forEach(item => {
        const inputbox = " <div class='form-check form-check-inline'><input class='form-check-input' type='checkbox' id='gid" + item.id + "' name='" + item.name + "' value='" + item.id + "'>";
        const label = " <label class='form-check-label' for='gid" + item.id + "'>" + item.name + "</label></div>";
        $(gameElement + String(index)).append(inputbox + label);
      });
    });
  }

  function searchPage(city1Element, city2Element) {
    const city1 = $(city1Element).val();
    const city2 = $(city2Element).val();

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

  function requestSearch(requestData) {
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
}

