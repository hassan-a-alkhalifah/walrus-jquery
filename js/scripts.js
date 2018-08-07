$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-hidden").toggle();
    $(".initially-showing").toggle();
  });
// $("#title").click(function() {
//   $("#title").fadeOut();
// });
// $("#back").click(function() {
//   $("#title").fadeIn();
// });
// $("img").click(function() {
//   $("body").addClass("darkTheme");
// });

$("img").click(function() {
  $("body").toggleClass("darkTheme");
});

});
