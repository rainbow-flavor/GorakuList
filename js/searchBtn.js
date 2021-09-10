function searchCond() {
    city1 = $("#city1").val();
    city2 = $("#city2").val();

    if (!city1) {
        alert("시/도를 선택하세요.");
        return -1;
    }

    if (!city2) {
        alert("시/군/구를 선택하세요.");
        return -1;
    }

    var count = 0;
    var numlist = new Array();
    var gamelist = '';

    function checkIsChecked(idx, item) {
        if ($("input:checkbox[id='gid" + item.id + "']").is(":checked") == true) {
            count += 1;
            numlist.push(item.id);
            gamelist += item.name + ',';
        }
    }

    $.each(game1, checkIsChecked);
    $.each(game2, checkIsChecked);
    $.each(game3, checkIsChecked);
    $.each(game4, checkIsChecked);
    $.each(game5, checkIsChecked);
    $.each(game6, checkIsChecked);
    $.each(game7, checkIsChecked);

    if (count >= 6) {
        alert("5개 이상 선택하실 수 없습니다!");
        return -1;
    }

    data = {
        city1: city1,
        city2: city2,
        machineTypes: []
    }

    if (count == 0) {
        search(data);
    }
    else {
        data.machineTypes = numlist;
        search(data);
    }
}

function search(data) {
    $.ajax({
        url: "https://gorakulist.herokuapp.com/search",
        data: JSON.stringify(data),
        method: "POST",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        crossOrigin: true
    })
    .done(function (json) {
        //TODO: json 데이터 받아서 동적으로 html 생성해야하는 부분
        console.log(json)
    });
}
