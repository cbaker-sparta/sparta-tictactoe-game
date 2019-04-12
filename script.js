$(function(event) {

  var check = true;
  var grid = $("[data-num]");
  var board = {};
  var number = 0;
  var win;

  $("[data-num]").on("click", function () {
    if (check == true) {
      $(this).html("X").addClass(" X");
      number = $(this).data("num");
      check = false;
      $("h2").html("It is O's turn");
    }
    else if (check == false) {
      $(this).addClass("O").html("O");
      number = $(this).data("num");
      check = true;
      $("h2").html("It is X's turn");
    }

  });

});
