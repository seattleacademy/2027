const sad = document.getElementById("sad");
setInterval(onTimer, 1000);
function onTimer() {
  let theTimer = Number($("#theTimer").text());
  theTimer = theTimer + 1;
  $("#theTimer").text(theTimer);
}

$("input").change(onChange);

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  if (correct == response) {
    let score = Number($("#score").text());
    score = score + 1;
    $("#score").text(score);
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
  } else {
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
    if (Math.random() > 0.9) {
      sad.play();
    }
  }
}