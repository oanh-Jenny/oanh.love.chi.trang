

$("#no").click(function() {
  playSound("wrong");
setTimeout(function() {
    alert("Sao chị lại nỡ không yêu em. Cho suy nghĩ lại");
}, 200);

});

$("#yes").click(function() {
  playSound("cheer");
  $(".body1").remove();
  $("body").addClass("yeu");
$("yeu").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);

});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3")
  audio.play();
}
