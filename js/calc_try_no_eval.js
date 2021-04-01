function calculateStr(userInput) {
  return new Function("return " + equation)();
}

$(document).ready(function () {
  $("button").on("click", function () {
    console.log(calculateStr(userInput));
  });
});
