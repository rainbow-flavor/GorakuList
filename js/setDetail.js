function addGames() {
    game1 = [{'id':'100', 'name':'WACCA'},
             {'id':'101', 'name':'beatmania'},
             {'id':'102', 'name':'DANCERUSH'},
             {'id':'103', 'name':'DDR'},
             {'id':'104', 'name':'EZ2AC'},
             {'id':'105', 'name':'GITADORA'},
             {'id':'106', 'name':'maimai'},
             {'id':'107', 'name':'비트세이버'},
             {'id':'108', 'name':'비트온'},
             {'id':'109', 'name':'사운드 볼텍스'},
             {'id':'110', 'name':'jubeat'},
             {'id':'111', 'name':'태고의 달인'},
             {'id':'112', 'name':'펌프 잇 업'}]
    game2 = [{'id':'300', 'name':'킹 오브 파이터즈'},
             {'id':'301', 'name':'철권'}]
    game3 = [{'id':'400', 'name':'오버테이크'},
             {'id':'401', 'name':'이니셜D'}]

    $.each(game1, function(idx, item) {
        var inputbox = " <input type='checkbox' id='"+item.id+"' name='"+item.name+"' value='"+item.id+"'>";
        var labels = " <label for='"+item.id+"'>"+item.name+"</label>";
        $("#game1").append(inputbox+labels);
    });
    $.each(game2, function(idx, item) {
        var inputbox = " <input type='checkbox' id='"+item.id+"' name='"+item.name+"' value='"+item.id+"'>";
        var labels = " <label for='"+item.id+"'>"+item.name+"</label>";
        $("#game2").append(inputbox+labels);
    });
    $.each(game3, function(idx, item) {
        var inputbox = " <input type='checkbox' id='"+item.id+"' name='"+item.name+"' value='"+item.id+"'>";
        var labels = " <label for='"+item.id+"'>"+item.name+"</label>";
        $("#game3").append(inputbox+labels);
    });
}