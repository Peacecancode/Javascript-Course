console.log("Calculator.Js is connected")
let outputBox = document.getElementById("output");
let number1 = document.getElementById("one");
let number2 = document.getElementById("two");
let number3 = document.getElementById("three");
let number4 = document.getElementById("four");
let number5 = document.getElementById("five");
let number6 = document.getElementById("six");
let number7 = document.getElementById("seven");
let number8 = document.getElementById("eight");
let number9 = document.getElementById("nine");
let number0 = document.getElementById("zero");
let plusButton = document.getElementById("plus");
let multiplyButton = document.getElementById("multiply");
let subtractButton = document.getElementById("subtract");
let divideButton = document.getElementById("divide");
let deleteButton = document.getElementById("delete");
let clearButton = document.getElementById("clear");
let equalsButton = document.getElementById("equals");



number1.onclick = function () {
    outputBox.value += "1";
};
number2.onclick = function () {
    outputBox.value += "2";
};
number3.onclick = function () {
    outputBox.value += "3";
};
number4.onclick = function () {
    outputBox.value += "4";
};
number5.onclick = function () {
    outputBox.value += "5";
};
number6.onclick = function () {
    outputBox.value += "6";
};
number7.onclick = function () {
    outputBox.value += "7";
};
number8.onclick = function () {
    outputBox.value += "8";
};
number9.onclick = function () {
    outputBox.value += "9";
};
number0.onclick = function () {
    outputBox.value += "0";
};
plusButton.onclick = function () {
    outputBox.value += "+";
};
multiplyButton.onclick = function () {
    outputBox.value += "*";
};
subtractButton.onclick = function () {
    outputBox.value += "-";
};
divideButton.onclick = function () {
    outputBox.value += "/";
};
deleteButton.onclick = function () {
    outputBox.value = " "; 
};
clearButton.onclick = function () {
    outputBox.value = "";
};
equalsButton.onclick = function () {
    outputBox.value = equal;
};
