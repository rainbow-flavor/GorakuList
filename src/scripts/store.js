import './common'
import $ from "jquery";

$(function () {
  $('[data-toggle="tooltip"]').tooltip('enable');
  //TODO ready function 정리
  const title = $("#title-store").text();
  $("#link-cs").attr("href", "cs.html?incorrect&name=" + encodeURI(title));
});
