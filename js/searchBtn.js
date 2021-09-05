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

    if(count == 0) {
        location.href = "/search.html?city1="+city1+"&city2="+city2+"&game=-1";
    }
    else {
        location.href = "/search.html?city1="+city1+"&city2="+city2+"&game="+numlist.slice(0, -1);
    }
}