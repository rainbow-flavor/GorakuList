const openedElementList = [
    '<span class="badge bg-success" style="color:white">영업 중</span>',
    '<span class="badge bg-danger" style="color:white">폐업</span>',
    '<span class="badge bg-warning" style="color:white">영업 종료</span>',
    '<span class="badge bg-secondary" style="color:white">정보 없음</span>'
]

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

    function checkIsChecked(item) {
        if ($("input:checkbox[id='gid" + item.id + "']").is(":checked") == true) {
            count += 1;
            numlist.push(item.id);
            gamelist += item.name + ',';
        }
    }

    gameListAll.forEach(gameListCategorized => {
        gameListCategorized.forEach(checkIsChecked);
    })

    if (count >= 6) {
        alert("5개 이상 선택하실 수 없습니다!");
        return -1;
    }

    data = {
        city1: city1,
        city2: city2,
        machineTypes: []
    }

    data.machineTypes = numlist;
    search(data);
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
        if (json.length == 0) return;

        console.log(json);

        let shopsHtml = '';
        $("#shopcard-list").empty();

        json.forEach(function (shop) {
            $.get("../shop-card.html", function (data) {


                if (shop.isop !== null) data = data.replace('{shop-opened-status}', openedElementList[shop.isop ? 0 : 1]);
                else data = data.replace('{shop-opened-status}', openedElementList[3]);

                if (shop.knsta !== null) {
                    let asktn_img = '';
                    [...shop.knsta].forEach(c => { asktn_img = asktn_img.concat(`<img src="/resources/${c}.png" width="20" /> `); });
                    data = data.replace('{shop-network-status}', asktn_img);
                }
                else data = data.replace('{shop-network-status}', '');

                if (shop.name !== null) data = data.replace('{shop-name-text}', shop.name);
                else data = data.replace('{shop-name-text}', '정보 없음');

                if (shop.address !== null) data = data.replace('{shop-card-address-text}', shop.address);
                else data = data.replace('{shop-card-address-text}', '정보 없음');

                if (shop.uptime !== null) data = data.replace('{shop-card-uptime-text}', shop.uptime);
                else data = data.replace('{shop-card-uptime-text}', '정보 없음');

                shopsHtml = shopsHtml.concat(data);
                $("#shopcard-list").append(data);
            });
        });
    });
}
