function searchCond() {
    $("#search-title").text("검색 중...");

    city1 = $("#city1").val();
    city2 = $("#city2").val();

    $("#search-subtitle").text(city1+", "+city2);

    location.href = "/GorakuList/search.html?city1="+city1+"&city2="+city2;
}