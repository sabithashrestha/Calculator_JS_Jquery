var g_arr = [];
var g_operator = "";

var collectedArr = [];
var decimalCount = 0;
var thisNum = [];
$(document).ready(function () {
  $("button").on("click", function () {
    getCalculatorWork($(this));

    if (
      ($(this).attr("name") == "number") |
      ($(this).attr("name") == "zero") |
      ($(this).attr("name") == "decimal") |
      ($(this).attr("name") == "operator")
    ) {
      thisNum.push($(this).val());
      $(".outputScreen").html(thisNum.join(""));
    }
  });
});

function getCalculatorWork(thisObj) {
  var collectedOperator = "";

  var curBtnName = thisObj.attr("name");
  var currentClickedButton = "";
  currentClickedButton = thisObj.val();
  if (
    (collectedArr.length == 0) &
    ((curBtnName == "zero") | (curBtnName == "decimal"))
  ) {
    // cannot take multiple zeros and decimals at beginning
    return;
  }
  if (curBtnName == "decimal") {
    if (collectedArr.includes(".")) {
      // no multiple decimals in a set of number
      return;
    }
  }

  if (
    (curBtnName == "number") |
    (curBtnName == "zero") |
    (curBtnName == "decimal")
  ) {
    // take numbers , zeros, decimals
    collectedArr.push(currentClickedButton);
  }

  // console.log(collectedArr);

  if (curBtnName == "operator") {
    collectedOperator = currentClickedButton;

    if (collectedArr.length > 0) {
      var myNum = collectedArr.join("");
      g_arr.push(myNum);
      collectedArr = [];
    }
    g_arr.push(collectedOperator);
  }

  //console.log(g_arr);
  // console.log(collectedOperator);

  if (curBtnName == "clear") {
    // clear when AC btn clicked
    initialize();
  }
  if (curBtnName == "equal") {
    // give result when = is clicked
    if (collectedArr.length > 0) {
      var myNum = collectedArr.join("");
      g_arr.push(myNum);
      collectedArr = [];
    }
    if (g_arr.length > 0) {
      // console.log(g_arr);
      var sendArr = g_arr.join("");
      // console.log(sendArr);
      var result = evaluate(sendArr);
      // console.log(result);
      $(".formulaScreen").html(sendArr + "=");
      if (result.toString().length > 11) {
        $(".outputScreen").html(result.toFixed(11));
      } else {
        $(".outputScreen").html(result);
      }
    }
  }
}

function initialize() {
  collectedArr = [];
  decimalCount = 0;
  g_arr = [];
  g_operator = "";
  thisNum = [];
  ///  result = "";
  $(".formulaScreen").html("");
  $(".outputScreen").html("0");
}

function evaluate(formula) {
  var result = eval(formula);
  return result;
}

function isFloat(n) {
  return n === +n && n !== (n | 0);
}

function isInteger(n) {
  return n === +n && n === (n | 0);
}
