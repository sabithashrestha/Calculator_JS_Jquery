"use strict";
var lastClicked = "";

var operatorKeys = ["+", "-", "*", "/"];
var numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var decimalKey = ["."];
var equalKey = ["="];
var clearKey = ["AC"];

function initialize() {
  arr = [];
  formula = "";
  result = "";
  $(".formulaScreen").html(formula);
  $(".outputScreen").html("0");
}

function evaluate() {
  var result = eval(formula);
  return result;
}

function nullToString(str) {
  if ((str == null) | (str == undefined)) {
    str = "";
  }

  return str.toString();
}

function nullTozero(str) {
  if ((str == "") | (str == null) | (str == undefined) | (str == Infinity)) {
    str = 0;
  }

  return parseFloat(str);
}

var arr = [];
var formula = "";
var result = "";

var countDecimal = 0;
$(document).ready(function () {
  $("button").on("click", function () {
    var curBtnName = $(this).attr("name");
    var currentClickedButton = "";
    currentClickedButton = $(this).val();

    if (curBtnName == "decimal") {
      countDecimal++;
      if (countDecimal <= 1) {
        arr.push(currentClickedButton);
      }
    }

    if (
      (curBtnName == "zero") |
      (curBtnName == "number") //|
      // (curBtnName == "operator")
    ) {
      arr.push(currentClickedButton);
    }
    if ((arr[0] == "0") | (arr[0] == ".")) {
      // arr shouldnot start with zero or decimal
      arr = [];
    }
    if (curBtnName == "operator") {
      if (arr[arr.length - 1] == currentClickedButton) {
        console.log(arr[arr.length - 1]);
        console.log(currentClickedButton);
      }
    }
    console.log(arr);
    formula = arr.join("");
    console.log(formula);
    $(".formulaScreen").html(formula);

    if (currentClickedButton == "AC") {
      initialize();
    }
    if (currentClickedButton == "=") {
      result = evaluate();
      $(".formulaScreen").html(formula + "=");
      $(".outputScreen").html(result);
    }
  });
});
