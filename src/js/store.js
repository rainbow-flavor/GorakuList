import './common'
import $ from "jquery";

$(function () {
  $('[data-toggle="tooltip"]').tooltip('enable');
  $('#btn-map').on('click', onCollapseClick);
});
