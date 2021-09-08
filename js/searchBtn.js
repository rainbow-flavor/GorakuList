function searchCond() {
    city1 = $("#city1").val();
    city2 = $("#city2").val();

    if(city1 == null) {
        alert("시/도를 선택하세요.");
        return -1;
    }
    if(city2 == null) {
        alert("시/군/구를 선택하세요.");
        return -1;
    }

    var count = 0;
    var numlist = '';
    var gamelist = '';
    $.each(game1, function(idx, item) {
        if($("input:checkbox[id='gid"+item.id+"']").is(":checked") == true) {
            count += 1;
            numlist += item.id+',';
            gamelist += item.name+',';
        }
    });
    $.each(game2, function(idx, item) {
        if($("input:checkbox[id='gid"+item.id+"']").is(":checked") == true) {
            count += 1;
            numlist += item.id+',';
            gamelist += item.name+',';
        }
    });
    $.each(game3, function(idx, item) {
        if($("input:checkbox[id='gid"+item.id+"']").is(":checked") == true) {
            count += 1;
            numlist += item.id+',';
            gamelist += item.name+',';
        }
    });
    $.each(game4, function(idx, item) {
        if($("input:checkbox[id='gid"+item.id+"']").is(":checked") == true) {
            count += 1;
            numlist += item.id+',';
            gamelist += item.name+',';
        }
    });
    $.each(game5, function(idx, item) {
        if($("input:checkbox[id='gid"+item.id+"']").is(":checked") == true) {
            count += 1;
            numlist += item.id+',';
            gamelist += item.name+',';
        }
    });
    $.each(game6, function(idx, item) {
        if($("input:checkbox[id='gid"+item.id+"']").is(":checked") == true) {
            count += 1;
            numlist += item.id+',';
            gamelist += item.name+',';
        }
    });
    $.each(game7, function(idx, item) {
        if($("input:checkbox[id='gid"+item.id+"']").is(":checked") == true) {
            count += 1;
            numlist += item.id+',';
            gamelist += item.name+',';
        }
    });
    console.log(numlist)
    console.log(gamelist)

    if(count >= 6) {
        alert("5개 이상 선택하실 수 없습니다!");
        return -1;
    }

    data = {
            "city1": city1,
            "city2": city2,
            "game":-1
    }
    
    if (count == 0) {
        search(data);
    }
    else {
        data.game = numlist.slice(0, -1);
        search(data);
    }
}

function search(data) {
    $.ajax({
        url: "https://gorakulist.herokuapp.com/search",
        // url: "http://localhost:8081/search",
        data: JSON.stringify(data),
        method: "GET",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        crossOrigin : true
    })
        .done(function (json) {
            //TODO: json 데이터 받아서 동적으로 html 생성해야하는 부분
            console.log(json)
        });
}
