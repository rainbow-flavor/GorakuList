function searchCond() {
    city1 = $("#city1").val();
    city2 = $("#city2").val();

    location.href = "/GorakuList/search.html?city1="+city1+"&city2="+city2;
}