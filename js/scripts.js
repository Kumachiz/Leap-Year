$(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var leapYear = function(year) {
      if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    };

    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();

  });
});
