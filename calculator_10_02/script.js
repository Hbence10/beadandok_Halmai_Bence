"use strict";
let operation = ""; //Maga a muvelet
const operationPlace = document.getElementById("displayText"); //A muveletnek a helye
const textOperations = ["-", "+", "/", "*"]; //Az osszes lehetseges muvelet 
const textNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //Az osszes lehetseges szam
// Amikor a user szamot nyom:
function addNumber(textNumber) {
    operation += textNumber;
    operationPlace.innerHTML = operation;
}
// Amikor a user muvelet nyom:
function addOperation(operationSign) {
    if (textNumbers.includes(operation.charAt(operation.length - 1))) {
        operation += operationSign;
    }
    else if (operation.length > 1 && operation.charAt(operation.length - 1) == operationSign && !(textOperations).includes(operation.charAt(operation.length - 2))) {
        operation += operationSign;
    }
    else if (operation.length == 0 && (operationSign == "+" || operationSign == "-")) {
        operation += operationSign;
    }
    else if (((operation.charAt(operation.length - 1) == "+" && operationSign == "-" && operation.slice(operation.length - 2, operation.length) != "-+") || (operation.charAt(operation.length - 1) == "-" && operationSign == "+" && operation.slice(operation.length - 2, operation.length) != "+-")) && operation.length > 1) {
        operation += operationSign;
    }
    else if ((operation.charAt(operation.length - 1) == "*" || operation.charAt(operation.length - 1) == "/") && (operationSign == "+" || operationSign == "-")) {
        operation += operationSign;
    }
    operationPlace.innerHTML = operation;
}
// Amikor a user a vegeredmenyt szeretne megtudni: 
function getSum() {
    if (operation.includes("/") && operation.charAt(operation.length - 1) == "0") {
        operationPlace.innerHTML = "Error! You cannot do a divison by 0";
        operation = "";
    }
    else if (operation.includes("++")) {
        operation = operation.replace("++", "+");
        operationPlace.innerHTML = eval(operation);
    }
    else if (operation.includes("--")) {
        operation = operation.replace("--", "+");
        operationPlace.innerHTML = eval(operation);
    }
    else {
        operationPlace.innerHTML = eval(operation);
    }
    operation = eval(operation).toString();
}
// Amikor a user clearelni szeretne a szamologepet:
function clearPlace() {
    operation = "";
    operationPlace.innerHTML = "";
}
function backSpace() {
    operation = operation.slice(0, operation.length - 1);
    operationPlace.innerHTML = operation;
}
// Ha a user nem szeretne a gombokkal elvegezni a kivant muveletet
document.addEventListener("keydown", event => {
    let selectedKey = event.key;
    if (textNumbers.includes(selectedKey)) {
        addNumber(selectedKey);
    }
    else if (textOperations.includes(selectedKey)) {
        addOperation(selectedKey);
    }
    else if (selectedKey === "=" || selectedKey === "Enter") {
        getSum();
    }
    else if (selectedKey == "Backspace") {
        backSpace();
    }
});
